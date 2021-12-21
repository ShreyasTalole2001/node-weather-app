


console.log('Client side JavaScript File is loaded')

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const message1 = document.querySelector('#error')
const message2 = document.querySelector('#temp')
const message3 = document.querySelector('#weather')
const message4 = document.querySelector('#image')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    message1.innerHTML = ''
    message2.innerHTML = ''
    message3.innerHTML = ''
    message4.src = ''

    const location = search.value
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                message1.innerHTML = data.error

            } else {
                // console.log(data.temprature)
                // console.log(data.weather_des)
                message2.innerHTML = data.temprature + '&#8457;'
                message3.innerHTML =  data.weather_des
                message4.src = data.icon[0]




            }
        })
    })
})