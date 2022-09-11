import React, {Component} from "react";
import './Landing.css';
import grad from './media/grad_pix.jpg';
import {GitHub, Linkedin, Mail} from 'react-feather';

class Landing extends Component {
    render() {
        return (
            <div class="landing-wrapper">
                <div class="landing-contents">
                    <div class="description">
                        <div class="paragraph">
                            <p>Hello! I'm</p>
                            <p id="name"><b>Lauren Woods</b></p>
                            <p>Software developer</p>
                        </div>                
                    </div>

                </div>
                <div class="photo">
                            <img src={grad} alt="default photo" id="landing-photo"/>  
                    </div> 
        <div class="right-nav">
            <ul>
                <a href="https://github.com/lrn-w/" id="githublink">
                    <li><i><GitHub/></i></li>
                </a>

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