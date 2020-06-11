import React from "react";
import AdminSkill from "./components/AdminSkill";
import AdminProject from "./components/AdminProject";
import AdminLibrary from "./components/AdminLibrary"
const AdminPage = () => {
    return(
        <section>
            <AdminProject />
            <AdminSkill />
            <AdminLibrary />
        </section>
    )
};
export default AdminPage;