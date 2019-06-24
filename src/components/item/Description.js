import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    font: 14px/20px Arial, sans-serif;
    color: rgba(0, 0, 0, 0.5);
    margin: 30px 0;
`;

const Description = props => {
    const weatherDescr = props.weatherDescr.map(weatherDescr => {
        return (
            <div key={weatherDescr.id}>
                <div>{weatherDescr.main}</div>
            </div>
        )
    });

    return (
        <Container>
            {weatherDescr}
        </Container>
    )
};

Description.propTypes = {
    weatherDescr: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
        id: PropTypes.number,
        main: PropTypes.string
    }))
};

export default Description;
