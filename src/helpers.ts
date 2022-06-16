import axios from 'axios'

import { GithubCommitsResponse, GithubPullsResponse } from './github'
import { APIResponse } from './responses'

const requestConfig = { headers: { Accept: 'application/vnd.github.v3+json' } }

export const handleFetchPullRequests = async (owner: string, repository: string): Promise<APIResponse[] | undefined> => {
    return undefined
}

export const fetchPullRequests = async (owner: string, repository: string): Promise<GithubPullsResponse[] | undefined> => {
    try {
        const { data } = await axios.get<GithubPullsResponse[]>(`https://api.github.com/repos/${owner}/${repository}/pulls`, requestConfig)
        console.log(data)
        return data
    } catch (err) {
        console.log('Failed to fetch pull requests')
        handleGithubError(err)
    }
}

export const fetchCommitCount = async (url: string): Promise<number | undefined> => {
    try {
        const { data } = await axios.get<GithubCommitsResponse[]>(url, requestConfig)
        return data.length
    } catch (err) {
        console.log('Failed to fetch commits')
        handleGithubError(err)
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
