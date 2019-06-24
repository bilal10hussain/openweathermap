/**
 * Absolute main container for each page. This is the parent of all 'main' contents.
 * Usage: <MainContainer>All other components here</MainContainer>
 */

import styled from "styled-components";
import mq from "../helpers/MediaQueries";

const MainContainer = styled.main`
    margin: 20px;
    position: relative;
    max-width: 1000px;

    ${mq.desktop`
        margin: 30px auto;
    `}
`;

export default MainContainer;
