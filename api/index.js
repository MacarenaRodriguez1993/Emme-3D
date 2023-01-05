require("dotenv").config()
const express = require("express")
const server = express()
const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
const routes = require("./routes/index.js")
const morgan = require("morgan")
const cors = require("cors")

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, PORT, TEST_HOST } = process.env
const DEFAULT_PORT = 3001

mongoose
    .connect(
        TEST_HOST ||
            `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/?retryWrites=true&w=majority&ssl=true`
    )
    .then(() => {
        console.log("DB connection Successfull")
    })
    .catch((err) => {
        console.log(err)
    })

server.use(cors())
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    )
    next()
})
server.use(express.json())
server.use(morgan("dev")) //agrege morgan
server.use("/", routes)

// Si no tenemos un puerto especificado por variable global elegirá el puerto 3001 por defecto
server.listen(PORT, () => {
    console.log(
        `Backend server is running on port ${PORT ? PORT : DEFAULT_PORT}!`
    )
})
