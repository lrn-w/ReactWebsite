import React, {Component} from "react";
import { GitHub } from "react-feather";
import './Projects.css';
import tiger from './media/tiger.png';
import cryptogram from './media/cryptogram_game.PNG';
import mockup from './media/react-mockup.PNG';
import plant from './media/IMG-2988.JPG';


class Projects extends Component {
    render() {
        return (
            <div>
                <div class="projects">
                    <h1>Selected Projects</h1>
                    <hr id="projects-bar"/>
                    <div class="wrapper">
                    <div class="card">
                        <div id="card-image">
                            <img src={tiger} alt="default photo" id="photo"/>      
                        </div>
                    <div id="card-desc">
                        <h2>TigerExpress</h2>
                            <p>
                            Using a Raspberry Pi and a barcode scanner, I implemented a program to simulate processing a package and notifying the recipient.  This program was written in Python with the use of MySQL to store package and mailroom employee information. 
                            </p>
                            <a href="https://github.com/lrn-w/Tiger-Express.git">
                                <i><GitHub/></i>
                            </a>                        
                    </div>  
                </div>
                <div class="card">
                    <div id="card-image">
                        <img src={plant} alt="photo of plant" id="photo"/>      
                    </div>
                    <div id="card-desc">
                        <h2>Plant Monitor</h2>
                        <p>
                        Using a Raspberry Pi, thermometer, soil reader, and various other tools, I implemented a program to notify a user when the soil moisture and temperature were out of range. This program was written Python with the use of MySQL to store plant readings. 
                        </p>
                        <a href="https://github.com/lrn-w/Plant-Monitor.git">
                        <i><GitHub/></i>
                        </a>

                    </div>  
                </div>
                <div class="card">
                    <div id="card-image">
                        <img src={mockup} alt="website mockup" id="photo"/>      
                    </div>
                    <div id="card-desc">
                        <h2>React Project</h2>
                        <p>
                            This project contains the code used to create my personal website. <br></br>Thank you Brandon for helping me with React! 
                            <br></br>Written using CSS and JS.
                        </p>
                        <a href="https://github.com/lrn-w/ReactWebsite.git">
                            <i><GitHub/></i>
                        </a>
                    </div>  
                </div>
                <div class="contents card">
                    <div id="card-image">
                        <img src={cryptogram} alt="default photo" id="photo"/>      
                    </div>
                    <div id="card-desc">
                        <h2>Cryptogram Game</h2>
                        <p>
                        Using the Unity gaming software, a classmate and I created a Cryptogram game with various difficulities and topics to choose from. This was written in C#.
                        </p>
                        <a href="https://github.com/lrn-w/Cryptogram-Game.git">
                            <i><GitHub/></i>
                        </a>
                    </div>  
                </div>


                    </div>
            </div>
        </div>

        );
    }

}

export default Projects;