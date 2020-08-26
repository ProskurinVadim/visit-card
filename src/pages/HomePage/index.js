import React from "react";

import ProfileInformation from "./components/ProfileInformation";
import Container from "../../components/shared/Container";
import ProfileResume from  "./components/ProfileResume";
import "./style.css";
const HomePage = () => {
    return (
        <section className="home-page">
            <div className="profile">
                <Container>
                    <ProfileInformation />
                </Container>
            </div>
            <div className="resume">
                <Container>
                    <ProfileResume />
                </Container>
            </div>
        </section>
    )
};

export default HomePage;