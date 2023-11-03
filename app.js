
const express = require("express")
// const config = require("./config");
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors')
const path = require('path')



mongoose.connect('mongodb+srv://yaojohanna2003:johanna@cluster0.5mgufpk.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
 useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
module.exports = app