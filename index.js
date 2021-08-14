import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import colors from 'colors'

dotenv.config({
    path: './config/.env'
})

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(
            process.env.PORT, 
            () => console.log(colors.magenta.underline(`Server is running on port ${process.env.PORT}`)))
    })
    .catch((error) => {
        console.log(colors.red(error.message))
    })

mongoose.set('useFindAndModify', false)