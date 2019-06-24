/**
 * Forecast component of a selected city.
 * Contains:
 * a) Back to button (to the homepage)
 * b) Title which contains city name
 * c) Content block which contains: city name, city temp,
 * d) Content block which contains: time, temperature and weather description for every 3 hours for 5 days
 */

import React  from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Moment from "react-moment";
import _ from "lodash";
import { Helmet } from "react-helmet";

import MainTemperature from "../../item/MainTemperature";
import Description from "../../item/Description";



const Container = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const ContentBlock = styled.div`
    margin: 20px 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    
    &:nth-child(odd) {
        background-color: #f8f8f8;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const DateTime = styled.div`
    margin: 30px 0;
    font-weight: 700;
`;


const Forecast = props => {
    const data = props.data;
    const cityName = props.currentCityName;
    const cityTemp = props.currentCityTemp;

    const items = data.map((item, index) => {
        return (
            <Item key={index}>
                <DateTime>
                    <Moment fromNow ago format="HH:mm" unix>{item.dt}</Moment>
                </DateTime>
                <MainTemperature mainTemp={item.main.temp}/>
                <Description weatherDescr={item.weather} />
            </Item>
        )
    });

    const sectionedItems = _.chunk(items, 8);

    const renderItems = sectionedItems.map((items, i) => {
        return (
            <Row key={i}>
                {items}
            </Row>
        )
    });

    const weatherTitle = `Weather report for ${cityName}`;

    return (
        <Container>
            <Helmet>
                <title>{weatherTitle}</title>
            </Helmet>

            <h1>{weatherTitle}</h1>

            <ContentBlock>
                <strong>Currently, in {cityName} it's {cityTemp} degree Celcius.</strong>
            </ContentBlock>

            <ContentBlock>
                <strong>Weather for the next 3 hours and 5 days:</strong>
                {renderItems}
            </ContentBlock>
        </Container>
    )
};

Forecast.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        dt: PropTypes.number,
        main: PropTypes.shape({
            temp: PropTypes.number,
            temp_min: PropTypes.number,
            temp_max: PropTypes.number,
            pressure: PropTypes.number,
            sea_level: PropTypes.number,
            grnd_level: PropTypes.number,
            humidity: PropTypes.number,
            temp_kf: PropTypes.number
        }),
        weather: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            main: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.string
        })),
        clouds: PropTypes.shape({
            all: PropTypes.number
        }),
        wind: PropTypes.shape({
            speed: PropTypes.number,
            deg: PropTypes.number
        }),
        rain: PropTypes.shape({
            "3h": PropTypes.number
        }),
        sys: PropTypes.shape({
            pod: PropTypes.string
        }),
        dt_text: PropTypes.string
    })),
    currentCityName: PropTypes.string,
    currentCityTemp: PropTypes.number
};

export default Forecast;
