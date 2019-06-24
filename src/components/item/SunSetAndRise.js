import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Moment from "react-moment";

const Container = styled.div`
    font: 14px/20px Arial, sans-serif;
    color: rgba(0, 0, 0, 0.5);
    margin: 30px 0;
`;

const SunRiseSet = props => {
    const { sunrise, sunset } = props;

    return (
        <Container>
            <div>Sunrise: <Moment format="HH:mm" unix>{sunrise}</Moment></div>
            <div>Sunset: <Moment format="HH:mm" unix>{sunset}</Moment></div>
        </Container>
    )
};

SunRiseSet.propTypes = {
    sunrise: PropTypes.number,
    sunset: PropTypes.number
};

export default SunRiseSet;
