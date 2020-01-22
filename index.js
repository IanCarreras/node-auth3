const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')

const dbConfig = require('./data/dbConfig')
const authRouter = require("./auth/auth-router.js")
const usersRouter = require("./users/users-router.js")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(logger())
server.use(express.json())

server.use("/api", authRouter)
server.use("/api/users", usersRouter)

server.use(notFound())
server.use(error())

server.listen(port, () => {
    console.log(`\n** Running on port ${port} **\n`)
})