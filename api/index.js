require("dotenv").config()
const express = require("express")
const server = express()
const mongoose = require("mongoose")
const routes = require("./routes/index.js")
const morgan = require("morgan")

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, PORT } = process.env
const DEFAULT_PORT = 3001

mongoose
    .connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/?retryWrites=true&w=majority&ssl=true`
        //"mongodb://127.0.0.1:27017/emme3D"
    )
    .then(() => {
        console.log("DB connection Successfull")
    })
    .catch((err) => {
        console.log(err)
    })

server.use(express.json())
server.use(morgan("dev")) //agrege morgan
server.use("/", routes)

// Si no tenemos un puerto especificado por variable global elegirá el puerto 3001 por defecto
server.listen(PORT || DEFAULT_PORT, () => {
    console.log(
        `Backend server is running on port ${PORT ? PORT : DEFAULT_PORT}!`
    )
})
