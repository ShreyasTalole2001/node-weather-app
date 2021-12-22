
# Weather App

Forecast weather using location provided by user.


## Demo

https://shreyashtalole-weather-app.herokuapp.com/


## Tools And Technologies

1) NodeJs 
2) Express
3) Map Box API
4) Weather Stack API

## API Reference

#### Get all items

```http
  GET /https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=YOUT_API_KEY&limit=1'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `address` | `string` | **Required**. |

#### Get item

```http
  GET /http://api.weatherstack.com/current?access_key=YOUT_API_KEY&query=' + latitude + ',' + longitude + '&units=f'
```

| Parameter | Type     | Description                       |
 :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `latitude` | `string` | **Required**. |
| `longitude` | `string` | **Required**. |
| `units` | `char` | **Required**. |




