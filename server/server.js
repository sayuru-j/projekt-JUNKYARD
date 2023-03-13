// Using Express Js to handle Routes, Middleware, Templating, Error Handling and Integration of MongoDB
const express = require('express')

const app = express()

// Import routes
const authRoutes = require('./routes/auth')

// Middlewares
app.use("/api", authRoutes)

// Setting the PORT, backend runs
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`API is running on port ${port}`))

