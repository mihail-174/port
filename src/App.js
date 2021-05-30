// import logo from './logo.svg';
import './styles/font-awesome.scss';
import './styles/App.scss';
import React from "react";
import { Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";

import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import SimpleTabs from "./components/SimpleTabs";
import Front from "./pages/Front";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {

    return (
        <Switch>
            <Route exact path='/' component={Front} />
            <Route path='/about' component={About} />
            <Route path='/work/:id' component={Work} />
        </Switch>
    );
}

export default App;
