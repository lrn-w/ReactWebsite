import React, {Component} from "react";
import './Landing.css';
import photo from './media/default-user-image.png';
import {GitHub, Linkedin, Mail} from 'react-feather';

class Landing extends Component {
    render() {
        return (
            <div>
                <div class="contents">
                    <div class="description">
                        <div class="paragraph">
                            <p>Hello! I'm</p>
                            <p id="name"><b>Lauren Woods</b></p>
                            <p>A software developer...?</p>
                        </div>
            <img src={photo} alt="default photo" id="photo"/>           
                </div>
            </div>
        <div class="right-nav">
            <ul>
                <a href="https://github.com/lrn-w/" id="githublink">
                    <li><i><GitHub/></i></li>
                </a>
                <li><i><Mail/></i></li>
                <a href="https://www.linkedin.com/in/lauren-woods1/" id="linkedinlink">
                    <li><i><Linkedin/></i></li>
                </a>
            </ul>            
        </div>
            </div> 
        );
    }
}

export default Landing;