import React from "react";

import SocialButton from "../../components/SocialButton";
import List from "../../components/List"
import Contacts from "../../containers/Contacts";
import Container from "../../components/Container";
import "./style.css"
const Component = List(SocialButton);

const social = [{className :"github", text:"github", icon : "null", link: "null"},
    {className :"telegram", text:"telegram", icon : "null", link: "null"},
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