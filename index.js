require('dotenv').config()
const express = require('express')//this express is the package that is imported 
const app = express()//this app is the variable that is used similar to the Math function where the variable can be accessed 
// for any of the app related contents

const port = 3000 //this is the port number the port number can be anything

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