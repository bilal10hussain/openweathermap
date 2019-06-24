This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start this project
To get this project working, you should have a valid API key from OpenWeatherMap. You can create an API key here: https://openweathermap.org/appid

After creating an account, and getting an API key, you should create a file called `API_CONFIG.js` in `/components/helpers/` which contains the API key and some other information. Here is an example:
```
const API_CONFIG = {
    "key": "API_KEY_GOES_HERE",
    "baseUrl": "http://api.openweathermap.org/data/2.5/",
    "units": "metric",
};

export default API_CONFIG;
```

After configuring the API and some settings, you can start the project by the following commands:

1) `npm install` - to install all dependencies

2) `npm start` - to start the project @ localhost



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
