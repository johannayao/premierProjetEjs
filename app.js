const express = require("express")
const app = express()
const require = ('ejs')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors')
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(cors())
app.use(express.json())

module.exports = app