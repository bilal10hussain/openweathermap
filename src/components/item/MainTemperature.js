import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainTemp = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    background-color: ${props => props.isHappy ? "orange" : "yellow"};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 25px;
    text-align: center;
`;

const MainTemperature = props => {
    const { mainTemp } = props;
    const HAPPY_TEMP = 20;
    const checkHappy = mainTemp >= HAPPY_TEMP;

    return (
        <MainTemp isHappy={checkHappy}>
            {Math.round(mainTemp)}
        </MainTemp>
    )
};

MainTemperature.propTypes = {
    mainTemp: PropTypes.number
};

MainTemp.propTypes = {
    isHappy: PropTypes.bool
};

export default MainTemperature;
