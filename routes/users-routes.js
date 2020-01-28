const express = require('express')
const restricted = require('../middleware/restricted')
const Users = require('./user-model')
const router = express.Router()


router.get('/', restricted(), async (req, res, next) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router;