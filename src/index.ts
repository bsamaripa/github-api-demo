import dotenv from 'dotenv'
import express, { Express, Request, Response, NextFunction } from 'express'
import { handleFetchPullRequests } from './helpers'

dotenv.config()

const PORT = process.env.PORT || 8080
const app: Express = express()

app.get('/pull_requests/:owner/:repository', async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve().then(async () => {
        const data = await handleFetchPullRequests(req.params['owner'], req.params['repository'])
        res.send(data)
    }).catch(next)
})

app.options("/pull_requests/*", (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length')
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
