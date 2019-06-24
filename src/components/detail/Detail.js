/**
 * Detail component of a selected city. This is basically the 'container' component of Forecast.js
 * Contains:
 * a) Back to button (to the homepage)
 * c) Error / Loading message
 * d) Component which renders the forecast
 */

import React, { Component } from "react";
import axios from "axios";

import API_CONFIG from "../helpers/API_CONFIG";
import MainContainer from "../shared/MainContainer";
import BackToButton from "../shared/BackToButton";
import Forecast from "./forecast/Forecast";



class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            current: {
                cityId: this.props.match.params.id,
                cityWeather: [],
                cityName: "",
                cityTemp: ""
            }
        };
    }

    /**
     * Sets an error after the AJAX call to get an overview of my cities.
     * @param {object} error - Error status/message etc.
     */
    setError = error => {
        this.setState({
            isLoaded: true,
            error
        });
    };

    /**
     * Sets the data after the AJAX call to get an overview of my cities.
     * @param {object} response - The AJAX JSON response.
     */
    setData = response => {
        this.setState({
            isLoaded: true,
            data: response.data.list
        });
    };

    setWeatherData = response => {
        this.setState({
            isLoaded: true,
            current: {
                cityWeather: response.data,
                cityName: response.data.name,
                cityTemp: response.data.main.temp
            }
        })
    };

    componentDidMount() {
        const currentCityId = this.state.current.cityId;

        const forecastSelectedCityUrl = `${API_CONFIG.baseUrl}forecast?id=${currentCityId}&units=${API_CONFIG.units}&APPID=${API_CONFIG.key}`;
        const currentWeatherSelectedCityUrl = `${API_CONFIG.baseUrl}weather?id=${currentCityId}&units=${API_CONFIG.units}&APPID=${API_CONFIG.key}`;

        axios.get(forecastSelectedCityUrl).then(
            response => this.setData(response),
            error => this.setError(error)
        );

        axios.get(currentWeatherSelectedCityUrl).then(
            response => this.setWeatherData(response),
            error => this.setError(error)
        )
    }

    render() {
        const { error, isLoaded, data } = this.state;
        const { cityName, cityTemp } = this.state.current;

        return (
            <MainContainer>
                <BackToButton to="/cities">&lt; Back to overview</BackToButton>

                {error && <div>An error occurred: {error.message}</div>}

                {!isLoaded && <div>Loading</div>}

                <Forecast
                    currentCityName={cityName}
                    currentCityTemp={Math.round(cityTemp)}
                    data={data}
                />
            </MainContainer>
        );
    }
}

export default Detail;
