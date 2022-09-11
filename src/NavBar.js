import React, {Component} from 'react';
import "./NavBar.css";
import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';

import {
    Route,
    Routes,
    NavLink,
    HashRouter,
} from "react-router-dom";

const NavBar = () => {

    return(
        <HashRouter>
            <div className="navbar">
                <h1>Lauren Woods</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/AboutMe">About Me </NavLink></li>
                    <li><NavLink to="/Projects">Projects</NavLink></li>

                </ul>
            </div>
            <div className="navbar-content">
                <Routes>
                    <Route exact path="/" element={<Landing/>}></Route>
                    <Route exact path="/AboutMe" element={<AboutMe/>}></Route>
                    <Route exact path="/Projects" element={<Projects/>}></Route>

                </Routes>
            </div>
        </HashRouter>
    );

}

export default NavBar; 