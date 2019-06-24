/**
 * Back to button which can be used to browse back to the previous page.
 * Usage: <BackToButton>Lorem ipsum</BackToButton>
 * @param {object} Link - Extends the Link from the router dom.
 */

import { Link } from "react-router-dom";
import styled from "styled-components";
import mq from "../helpers/MediaQueries";

const BackToButton = styled(Link)`
    font-size: 14px;
    font-weight: 700;
    border: 2px solid #000;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    padding: 5px 10px;

    &:hover {
        border: 2px solid #6f6f6f;
        color: #6f6f6f;
    }
    
    ${mq.desktop`
        font-size: 18px;
    `}
`;

export default BackToButton;
