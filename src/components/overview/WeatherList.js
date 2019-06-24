/**
 * Overview ITEM component of my favourite cities.
 * Contains:
 * a) Header which consists of the city name and flag
 * b) Main temperature
 * c) Description of the weather (e.g. Clouds)
 * d) Time of sun rise and sun set
 * e) Min and max temperature
 * f) Button to go to the detail view of that particular city
 */

import React  from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom"

import mq from "../helpers/MediaQueries";
import Header from "../item/Header";
import Temperatures from "../item/Temperatures";
import Description from "../item/Description";
import MainTemperature from "../item/MainTemperature";
import SunRiseSet from "../item/SunSetAndRise";

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    
    ${mq.desktop`
        flex-direction: row;
    `}
`;

const ListItem = styled.li`
    border: 1px solid #c0c0c0;
    padding: 20px 10px;
    margin: 0 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 100%;
    align-items: center;
    text-align: center;
    transition: border 250ms;
    
    &:hover {
        border: 1px solid #cecece;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    }
    
    ${mq.tablet`
        flex-basis: 25%;
    `}
    
    ${mq.desktop`
        flex-basis: 16%;
        margin: 0;
    `}
`;

const Button = styled(Link)`
    cursor: pointer;
    border: 1px solid #000;
    background-color: transparent;
    font-size: 12px;
    color: #000;
    padding: 5px 10px;
    margin: 30px 0;
    text-decoration: none;
    transition: border, background-color 250ms;
    
    &:hover {
        border: 1px solid #fff;
        background-color: #000;
        color: #fff;
    }
`;

const WeatherList = props => {
        const data = props.data;

        return (
            <List>
                {
                    data.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Header cityName={item.name} country={item.sys.country} />
                                <MainTemperature mainTemp={item.main.temp}/>
                                <Description weatherDescr={item.weather} />
                                <SunRiseSet sunrise={item.sys.sunrise} sunset={item.sys.sunset} />
                                <Temperatures tempMin={item.main.temp_min} tempMax={item.main.temp_max} />
                                <Button to={`/cities/${item.id}`}>Weather for the next 5 days</Button>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    };

WeatherList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        coord: PropTypes.shape({
            lon: PropTypes.number,
            lat: PropTypes.number
        }),
        sys: PropTypes.shape({
            type: PropTypes.number,
            id: PropTypes.number,
            message: PropTypes.number,
            country: PropTypes.string,
            sunrise: PropTypes.number,
            sunset: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            main: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.string
        })),
        main: PropTypes.shape({
            temp: PropTypes.number,
            pressure: PropTypes.number,
            humidity: PropTypes.number,
            temp_min: PropTypes.number,
            temp_max: PropTypes.number
        }),
        visibility: PropTypes.number,
        wind: PropTypes.shape({
            speed: PropTypes.number,
            deg: PropTypes.number
        }),
        clouds: PropTypes.shape({
            all: PropTypes.number
        }),
        dt: PropTypes.number,
        id: PropTypes.number,
        name: PropTypes.string,
    })),
};

export default WeatherList;
