import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.header`
    min-height: 114px;
`;

const CityName = styled.h1`
    font: 700 18px/24px Arial,sans-serif;
    margin: 0 0 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Header = props => {
    const getFlag = country => {
        const baseUrl = `https://www.countryflags.io`;
        const iconStyle = 'flat';
        const iconSize = '32';
        const iconExtension= '.png';

        return `${baseUrl}/${country}/${iconStyle}/${iconSize}${iconExtension}`;
    };

    const { cityName, country } = props;

    return (
        <Container>
            <img alt={country} src={getFlag(country)}/>

            <CityName>
                {cityName}
            </CityName>
        </Container>
    )
}

Header.propTypes = {
    cityName: PropTypes.string,
    country: PropTypes.string
};

export default Header;
