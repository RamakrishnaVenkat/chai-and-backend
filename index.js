require('dotenv').config()
const express = require('express')//this express is the package that is imported 
const app = express()//this app is the variable that is used similar to the Math function where the variable can be accessed 
// for any of the app related contents

const port = 3000 //this is the port number the port number can be anything

const GitHubData = {//this is used to get the data from the user
  "login": "RamakrishnaVenkat",
  "id": 91265544,
  "node_id": "MDQ6VXNlcjkxMjY1NTQ0",
  "avatar_url": "https://avatars.githubusercontent.com/u/91265544?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RamakrishnaVenkat",
  "html_url": "https://github.com/RamakrishnaVenkat",
  "followers_url": "https://api.github.com/users/RamakrishnaVenkat/followers",
  "following_url": "https://api.github.com/users/RamakrishnaVenkat/following{/other_user}",
  "gists_url": "https://api.github.com/users/RamakrishnaVenkat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RamakrishnaVenkat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RamakrishnaVenkat/subscriptions",
  "organizations_url": "https://api.github.com/users/RamakrishnaVenkat/orgs",
  "repos_url": "https://api.github.com/users/RamakrishnaVenkat/repos",
  "events_url": "https://api.github.com/users/RamakrishnaVenkat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RamakrishnaVenkat/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-23T12:50:03Z",
  "updated_at": "2024-04-13T05:01:47Z"
}

app.get('/', (req, res) => {//in this we can see that the app is trying to get the request and response from the user
  res.send('Hello World!')//this is the response that we get from the app
})


app.get('/twitter', (req, res) => {//in this we can see that the app is trying to get the request and response from the user
    const name="hari";
    res.send(`<h1>hello ${name}</h1>`)//this is the response that we get from the app
  })


  app.get("/yt",(req,res)=>{
    res.send(`https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2`)
  })
//   app.get('/twitter', (req, res) => do not forget the "/" else we may get an error

app.listen(process.env.PORT, () => {//we have given the port number  form the .env file where we have used the PORT variable
  console.log(`Example app listening on port ${port}`)
})
// in case the local host that we use is unavailable and there is any other free port then we can use the "npm i dotenv"
// this allocates the respective ports to us


app.get("/github",(req,res)=>{
  res.json(GitHubData)//this is used to get the data from the variable GitHubData that we can access 
})