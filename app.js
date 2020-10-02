const express = require('express')
const app = express()

const connectDB = require('./config/db')
connectDB()


const PORT = process.env.PORT || 5000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/quotes', require('./routes/api/quotes'))

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})