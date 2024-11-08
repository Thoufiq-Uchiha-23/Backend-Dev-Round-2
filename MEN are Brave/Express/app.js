const express = require('express')
const morgan = require('morgan')

const app = express(); // opening the toolbox by storing all things in app variable

app.set('view engine', 'ejs')

// Middleware
// Middleware runs default for all routes
// Middleware are of 3 types: 
// Built-in Middleware
// Custom Middleware
// Third-party Middleware : morgan package

// Third-party Middleware
app.use(morgan('dev'))

// Custom middleware
// This middleware as default runs for all routes...
// app.use((req, res, next) => {
//     console.log("this is middleware")

//     const a = 5;
//     const b = 3
//     console.log(a + b)
//     return next()
// })

// ... but we can also make middleware for particular routes
app.get('/', (req, res, next) => {
    const a = 5;
    const b = 10;
    console.log(a + b)
    console.log('Welcome to home')
    next()
}, (req, res) => {
    res.render('index')
})
app.get('/', (req, res) => {
    res.render('index')
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