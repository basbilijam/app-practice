const express = require ('express')

// generate a router object from the express library
// A router is sort of an empty 'app' that only has route logic
const router = express.Router()

// a route that says yay
router.get('/new', (reg, res) => {
  res.send('Yay new user')
})

// a route that oretends to have deleted a user
router.get('/delete', (reg, res) => {
  res.send('Deleted user')
})

// exports the router so the require()
// in the main app knows what to touch
module.exports = router
