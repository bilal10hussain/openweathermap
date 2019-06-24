This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start this project
Please note that you should have a valid API key from OpenWeatherMap. You can create an API key here: https://openweathermap.org/appid

After creating an account, you should make an `API_CONFIG.js` file in `/components/helpers/` which contains the API key and some other information. Here is my example:
```
const API_CONFIG = {
    "key": "API_KEY_GOES_HERE",
    "baseUrl": "http://api.openweathermap.org/data/2.5/",
    "units": "metric",
};

export default API_CONFIG;
```

After configuring the API and some settings, you can start the project by doing so:

a) `npm install` - to install all dependencies

b) `npm start` - to start the project @ localhost



## What this project contains:
* React
* prop-types - for typechecking (prop checking)
* axios - for making AJAX calls
* lodash - for creating handy arrays (see Forecast.js)
* moment - for reformatting timestamps (e.g. in ux timestamp)
* styled-components - for styling components
* react-helmet - for creating user friendly title tags

## To do list
* Writing tests
* Line graph for forecast
* Please let me know if you have any suggestions!
