import React, {Component} from "react";
import { GitHub } from "react-feather";
import photo from './media/default-user-image.png';
import './Projects.css';


class Projects extends Component {
    render() {
        return (
            <div>
                        <div class="contents">
            <h1>Selected Projects</h1>
            <hr id="bar"/>
            <div class="card">
                <div id="card-image">
                    <img src={photo} alt="default photo" id="photo"/>      
                </div>
                <div id="card-desc">
                    <h2>TigerExpress</h2>
                    <p>
                        Using a Raspberry Pi and a barcode scanner, I implemented a program to simulate processing a package and notifying the recipient.  This program was written in Python with the use of MySQL to store package and mailroom employee information. 
                    </p>
                    <i><GitHub/></i>
                </div>
            </div>
        </div>
            </div>

        );
    }

}

export default Projects;