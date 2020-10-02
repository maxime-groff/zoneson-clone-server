const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
  citation: {
    type: String, 
  }, 
  url: {
    type: String, 
  }, 
  tag: {
    type: String, 
  }
})

module.exports = Quotes = mongoose.model("quote", QuoteSchema)