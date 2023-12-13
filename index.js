require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitHubData = {
    "login": "zayedbingazidev",
    "id": 54660577,
    "node_id": "MDQ6VXNlcjU0NjYwNTc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/54660577?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zayedbingazidev",
    "html_url": "https://github.com/zayedbingazidev",
    "followers_url": "https://api.github.com/users/zayedbingazidev/followers",
    "following_url": "https://api.github.com/users/zayedbingazidev/following{/other_user}",
    "gists_url": "https://api.github.com/users/zayedbingazidev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zayedbingazidev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zayedbingazidev/subscriptions",
    "organizations_url": "https://api.github.com/users/zayedbingazidev/orgs",
    "repos_url": "https://api.github.com/users/zayedbingazidev/repos",
    "events_url": "https://api.github.com/users/zayedbingazidev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zayedbingazidev/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Zayed",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2019-08-29T06:52:58Z",
    "updated_at": "2023-12-13T08:38:27Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('zayedBackDev')
})

app.get('/login', (req, res) => {
    res.send('<h1>Log in now</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Money</h2>')
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})