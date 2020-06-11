import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PrivatrRoute from  "./components/PrivateRouter";

import Navbar from "./containers/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import AdminPage from "./pages/AdminPage"

import "./style.css";
import "./reset.css";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/project" component={ProjectPage}/>
                <Route exact path="/contacts" component={ContactsPage}/>
                <PrivatrRoute exact path="/admin" component={AdminPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default App