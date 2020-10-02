const express = require('express')
const router = express.Router()
const Quote = require('../../models/Quotes')

router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find()
    res.json(quotes)
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

module.exports = router