import React from "react";
import AdminProject from "./components/AdminProject";
import AdminLibrary from "./components/AdminLibrary"
import Container from "../../components/shared/Container";
import "./style.css";
const AdminPage = () => {
    return (
        <section>
            <Container>
                <AdminProject />
                <AdminLibrary />
            </Container>
        </section>
    )
};
export default AdminPage;