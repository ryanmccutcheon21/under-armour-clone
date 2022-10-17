import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'

// import routes

const app = express()

// call dotenv to use in app
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// starting path for all routes
// app.use('/user', userRoutes)

const CONNECTION_URL = process.emitWarning.REACT_APP_CONNECTION_URL
const PORT = process.env.REACT_APP_PORT || 5500

// use mongoose to connect to MongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))).catch(error => console.log(error.message))