import { css } from "styled-components";

const SIZES = {
    desktop: 1200,
    tablet: 768,
    phone: 320
};

// Iterate through the sizes and create a media template
const MediaQueries = Object.keys(SIZES).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${SIZES[label] / 16}em) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});

export default MediaQueries;
