const express = require('express')
const app = express(); // opening the toolbox by storing all things in app variable

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})


app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

app.listen(3000)
// to render html using express we use ejs, pug, chat
// to setup ejs use this command -> npm i ejs