import { fetchCommitCount, fetchPullRequests } from '../src/helpers'
import { CommitsResponse, PullRequestResponse, NotFoundResponse } from './testobjects'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('helpers', () => {
  let mock: MockAdapter

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  test('fetchPullRequests should return a response when received from github', async () => {
    mock.onGet('https://api.github.com/repos/owner/repository/pulls').reply(200, PullRequestResponse)
    const res = await fetchPullRequests('owner', 'repository')
    expect(res!.length).toBe(1)
  })

  test('fetchPullRequests should log an error when received an error from github', async () => {
    mock.onGet('https://api.github.com/repos/owner/repository/pulls').reply(404, NotFoundResponse)
    await expect(fetchPullRequests('owner', 'repository')).rejects.toThrow('Request failed with status code 404')
  })

  test('fetchCommits should return an int when received from github', async () => {
    mock.onGet('https://api.github.com/repos/owner/repository/pulls/1/commits').reply(200, CommitsResponse)
    const res = await fetchCommitCount('https://api.github.com/repos/owner/repository/pulls/1/commits')
    expect(res).toBe(1)
  })

  test('fetchCommits should log an error when received an error from github', async () => {
    mock.onGet('https://api.github.com/repos/owner/repository/pulls/1/commits').reply(404, NotFoundResponse)
    await expect(fetchCommitCount('https://api.github.com/repos/owner/repository/pulls/1/commits')).rejects.toThrow('Request failed with status code 404')
  })

  test('handleFetchPullRequests should', async () => {

  })

  test('handleFetchPullRequests should', async () => {

  })
})
