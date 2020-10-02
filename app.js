const express = require('express')
const app = express()

const connectDB = require('./config/db')
connectDB()

const PORT = process.env.PORT || 5000


// middleware that ensures that cors errors are prevented
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow the access of the api, to all clients/websites asking
  res.header('Access-Control-Allow-Headers', '*'); // which kind of header we want to accept 
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/quotes', require('./routes/api/quotes'))

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})