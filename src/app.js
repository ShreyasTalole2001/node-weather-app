const express = require('express')
const path = require('path')
const hbs = require('hbs')

const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')


const app = express()
const port = process.env.PORT || 3000

// Define path for express config
const publicDirectorypath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handelbar engin and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectorypath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Shreyash Talole'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    const address = req.query.address

    geocode(address, (error, data) => {
        if (error) {
            return res.send({ error })
        }
        

        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                return res.send({ error })
            }
         
            res.send({
               temprature: data.temprature,
               weather_des: data.weather_des,
               icon: data.icon,
               location: data.location
            })
        })

    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Shreyash Talole'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Shreyash Talole'
    })
})

app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)

    res.send({
        products: []
    })


})


// 404 page 
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page not found',
        name: 'Shreyash Talole'
    })
})



app.listen(port, () => {
    console.log('Server is up on port '+port)
})