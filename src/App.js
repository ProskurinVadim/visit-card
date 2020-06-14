import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import PrivateRoute from  "./components/PrivateRouter";

import Navbar from "./containers/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import AdminPage from "./pages/AdminPage"

import "./style.css";
import "./reset.css";
const App = () => {
    return (
        <HashRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/project" component={ProjectPage}/>
                <Route exact path="/contacts" component={ContactsPage}/>
                <PrivateRoute exact path="/admin" component={AdminPage} />
            </Switch>
        </HashRouter>
    )
};

export default App