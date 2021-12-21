const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4d756a2724a2eb5ad0f0a1b7c76b8d14&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temprature: body.current.temperature,
                weather_des: body.current.weather_descriptions,
                icon: body.current.weather_icons,
                location: body.location.name
            })
        }
    })
}

module.exports = forecast

