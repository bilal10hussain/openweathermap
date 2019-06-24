import React from "react";
import { Link } from "react-router-dom"

import MainContainer from "./shared/MainContainer";
import Title, { Subtitle } from "./shared/Titles";

const Home = () => {
    return (
        <MainContainer>
            <Title>Hi! Welcome to the my Weather Open App</Title>
            <p>
                I have created this app to learn more about React and REST API's. Please feel free to comment about the code,
                file structure, and whatever else could be improved.
            </p>

            <section>
                <Subtitle>Some shortcut links</Subtitle>
                <ul>
                    <li><Link to="/cities">Weather overview of my favourite cities</Link></li>
                    <li><Link to="/cities/2747372">Go directly to weather report of The Hague</Link></li>
                </ul>
            </section>
        </MainContainer>
    )
};

export default Home;
