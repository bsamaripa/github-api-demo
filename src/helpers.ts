import axios from 'axios'

import { GithubCommitsResponse, GithubPullsResponse } from './github'
import { APIResponse } from './responses'

const requestConfig = { headers: { Accept: 'application/vnd.github.v3+json', per_page: 100 } }

export const handleFetchPullRequests = async (owner: string, repository: string): Promise<APIResponse[] | undefined> => {
    try {
        const pulls = await fetchPullRequests(owner, repository)
        const res: APIResponse[] | undefined = await Promise.all(pulls.map(async (pr: GithubPullsResponse) => {
            const commits = await fetchCommitCount(pr.commits_url)
            return { id: pr.id, number: pr.number, title: pr.title, author: pr.user?.login, commit_count: commits || 0 } as APIResponse
        }))
        return res
    }
    catch (err) {
        console.log('Failed to handle pullRequestFetch')
        handleGithubError(err)
    }
}

export const fetchPullRequests = async (owner: string, repository: string): Promise<GithubPullsResponse[]> => {
    try {
        const { data } = await axios.get<GithubPullsResponse[]>(`https://api.github.com/repos/${owner}/${repository}/pulls`, requestConfig)
        return data
    } catch (err) {
        console.log('Failed to fetch pull requests')
        handleGithubError(err)
        return []
    }
}

// TODO: Replace logic with recursive calls to get commit counts > 100
export const fetchCommitCount = async (url: string): Promise<number | undefined> => {
    try {
        const { data } = await axios.get<GithubCommitsResponse[]>(url, requestConfig)
        return data.length
    } catch (err) {
        console.log('Failed to fetch commits')
        handleGithubError(err)
        return 0
    }
}

export const handleGithubError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
        console.log('error communicating with github')
    } else {
        console.log('Unexpected error')
    }
    throw err
}
