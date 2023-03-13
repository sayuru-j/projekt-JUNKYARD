// Using Express Js to handle Routes, Middleware, Templating, Error Handling and Integration of MongoDB
const express = require('express')
// Using morgan to log HTTP requests
const morgan = require('morgan')
// Using body-parser to extract the body of HTTp request
const bodyParser = require('body-parser')
// Using cor to get requests from different domains
const cors = require('cors')
// Using mongoose to set databse connection
const mongoose = require('mongoose')
// Using dotenv to load environment variable using process.env
require('dotenv').config()


const app = express()

// Import routes
const authRoutes = require('./routes/auth')

// Middlewares
app.use("/api", authRoutes)

// Setting the PORT, backend runs
const port = process.env.PORT
app.listen(port, () => console.log(`API is running on port ${port}`))

