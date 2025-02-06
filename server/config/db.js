const mongoose = require('mongoose')

const connectDb = async () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("ConnectDb")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connectDb