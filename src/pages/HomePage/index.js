import React from "react";

import ProfilePhoto from "../../containers/ProfilePhoto";
import ProfileInformation from "../../containers/ProfileInformation";
import Skills from "../../containers/Skills";
import Container from "../../components/Container";
import "./style.css";
const HomePage = () => {
    return (
        <section className="home-page">
            <Container>
                <div className="profile">
                    <ProfileInformation />
                    <ProfilePhoto />
                </div>
                <Skills />
            </Container>
        </section>
    )
};

export default HomePage;