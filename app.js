const express = require('express')

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const routers = require('./routes')
app.use(routers)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
})

// Unhandled promise rejection handler
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Promise Rejection:', reason)
    // Optional: Exit the process if needed
    // process.exit(1)
})

// Uncaught exception handler
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err)
    // Optional: Exit the process if needed
    // process.exit(1)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})