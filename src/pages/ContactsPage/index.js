import React from "react";

import SocialButton from "../../components/shared/SocialButton";
import List from "../../decorators/List"
import Contacts from "./components/Contacts";
import Container from "../../components/shared/Container";
import "./style.css"
const Component = List(SocialButton);

const social = [{className :"github", text:"github", icon : "null", link: "null"},
    {className :"telegram", text:"telegram", icon : "null", link: "https://t.me/Unburning"},
{className :"facebook", text:"facebook", icon : "null", link: "null"}
];
const contacts = {phone : "+380956509718", email : "proskurin.vadim@gmail.com",
    post : "Chyka"};
const ContactsPage = () => {
    return (
        <section className="contacts">
            <Container >
                <Contacts {...contacts} />
                {Component(social,"social","social-item")}
            </Container>
        </section>
    )
};

export default ContactsPage