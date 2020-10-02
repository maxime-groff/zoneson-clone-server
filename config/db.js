const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rattrapagetech:rattrapagetech@zonesonsdb.tmudu.mongodb.net/zonesondb?retryWrites=true&w=majority", {
      useNewUrlParser: true, 
      useCreateIndex: true, 
      useFindAndModify: true, 
      useUnifiedTopology: true
    })
    console.log("ça fonctionne, db connected")
  }
  catch (err) {
    console.log("db not connected")
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = connectDB









