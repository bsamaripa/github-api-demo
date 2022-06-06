import axios from 'axios'

import { GithubCommitsResponse, GithubPullsResponse } from './github'
import { APIResponse } from './responses'

const requestConfig = { headers: { Accept: 'application/vnd.github.v3+json' } }

export const handleFetchPullRequests = async (res: any): Promise<any> => {
    return undefined
}

export const fetchPullRequests = async (owner: string, repository: string): Promise<GithubPullsResponse[]> => {
    let res = []

    try {
        const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repository}/pulls`, requestConfig)
        res = data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log('error communicating with github')
        } else {
            console.log('Unexpected error')
        }
    }
    return res
}

export const fetchCommitCount = async (url: string): Promise<number> => {
    let res = []

    try {
        const { data } = await axios.get(url, requestConfig)
        res = data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log('error communicating with github')
            // throw err
        } else {
            console.log('Unexpected error')
            // throw err
        }
    }

    return res.length
}
