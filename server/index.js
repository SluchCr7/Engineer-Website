const express = require('express')
const connectDb = require('./config/db')
const app = express()
const cors = require('cors')
const {errorhandler} = require('./Middelware/errorHandler')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
require('dotenv').config()
// Connect DB
connectDb()

// Routes
app.use(express.json())
app.use(cors(
    {
        origin: process.env.HOSTNAME
    }
))
app.use(xss())

app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 200, // Limit each IP to 10 requests per `window` (here, per 10 minutes)
    message: "Too many requests, please try again later.",
}))

app.use(helmet())

app.get('/', (req, res) => {
    res.send('Hello Server')
})
app.use("/api/auth" , require('./routes/UserRoute'))
app.use("/api/product" , require('./routes/ProductRoute'))
app.use("/api/order" , require('./routes/OrderRoute'))
app.use(errorhandler)
// Listen Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))