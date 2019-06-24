/**
 * Absolute heading (h1) for each page. This is the heading of all 'main' contents.
 * Subtitle is used as a secondary title (h2).
 * Usage: <Title>Name of a page/main component</Title>
 */

import styled from "styled-components";
import mq from "../helpers/MediaQueries";

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin: 30px 0;
    padding: 0 0 5px;
    
    ${mq.desktop`
        font-size: 24px;
    `}
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin: 20px 0;
`;

export default Title;
