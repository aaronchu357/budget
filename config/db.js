const mongoose = require('mongoose');

require('dotenv').config()
const uri = process.env.MONGO_ATLAS_URI

const connectdb = async () => {
  try {
    // mongo client constructor
    await mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    )
    console.log('MongoDB database connection established successfully')
  }
  catch (err) {
    console.log(error)
    process.exit(1);
  }
}

module.exports = connectdb