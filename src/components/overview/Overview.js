/**
 * Overview component of my favourite cities.
 * Contains:
 * a) Back to button (to the homepage)
 * b) Title of the page
 * c) Error / Loading message
 * d) Component which renders each item of the overview list
 */

import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import API_CONFIG from "../helpers/API_CONFIG";
import CITY_IDs from "../helpers/CITY_IDS";
import MainContainer from "../shared/MainContainer";
import Title from "../shared/Titles";
import BackToButton from "../shared/BackToButton";
import WeatherList from "./WeatherList";



class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            data: []
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

    componentDidMount() {
        const my5citiesIds = `group?id=${CITY_IDs.TheHague},${CITY_IDs.Barcelona},${CITY_IDs.Sialkot},${CITY_IDs.Medina},${CITY_IDs.Damascus}`;
        const my5citiesUrl = `${API_CONFIG.baseUrl}${my5citiesIds}&units=${API_CONFIG.units}&APPID=${API_CONFIG.key}`;

        axios.get(my5citiesUrl)
            .then(response => this.setData(response),
                error => this.setError(error)
            )
    }

    render() {
        const { error, isLoaded, data } = this.state;

        return (
            <MainContainer>
                <Helmet>
                    <title>Weather overview of my favourite cities</title>
                </Helmet>

                <BackToButton to="/">&lt; Back to homepage</BackToButton>

                <Title>Weather overview of my favourite cities</Title>

                {error && <div>An error occurred: {error.message}</div>}

                {!isLoaded && <div>Loading</div>}

                <WeatherList data={data} />
            </MainContainer>
        );
    }
}

export default Overview;
