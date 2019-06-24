import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Container = styled.div`
    color: rgba(0, 0, 0, 0.75);
    margin: 20px 0;
`;

const TempRow = styled.div`
    font-size: 12px;
    
    ${props => props.isAverage && css`
        font-size: 16px;
        margin: 0 0 10px;
    `}
    
    &:after {
        content: "\\00b0 C";
    }
`;

const Temperatures = ({tempMin, tempMax}) => {
    const roundedTempMin = Math.round(tempMin);
    const roundedTempMax = Math.round(tempMax);

    return (
        <Container>
            <TempRow isAverage>
                <strong>Avg. temp. </strong>
                { Math.round((tempMin + tempMax) / 2) }
            </TempRow>

            <TempRow>
                <strong>Min. temp. </strong>
                {roundedTempMin}
            </TempRow>

            <TempRow>
                <strong>Max. temp. </strong>
                {roundedTempMax}
            </TempRow>
        </Container>
    )
};

Temperatures.propTypes = {
    tempMin: PropTypes.number,
    tempMax: PropTypes.number
};

TempRow.propTypes = {
    isAverage: PropTypes.bool
};

export default Temperatures;
