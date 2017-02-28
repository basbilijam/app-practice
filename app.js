// require the main express library

const express =  require ('express')

// create our app from the library

const app = express()

// import our user router

const user = require (__dirname + '/routes/user')

// Mount the routes of the user module on the /user path
// in other words, run the sub-app called user under '/user'
// we now have /user/new and /user/delete
app.use('/user', user)

// make route saying hello
app.get('/', (req, res) => {
  console.log('Someone is visiting us!')
  res.send('Hello World')
})

// make the server listen to port 3000
app.listen(3000, f => {
  console.log('Server is running on port 3000')
})
