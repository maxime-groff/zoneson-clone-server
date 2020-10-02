const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
  citation: String,
  url: String,
  tag: String,
})

module.exports = Quote = mongoose.model("quote", QuoteSchema, "sons")