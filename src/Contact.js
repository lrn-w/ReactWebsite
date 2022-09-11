import React, {Component} from "react";
import './Contact.css'
import {GitHub, Linkedin} from 'react-feather';


class Contact extends Component {
    render() {
        return (
            <div>
                        <div class="contact">
            <h1>Contact Me</h1>
            <hr id="bar"/>
        </div>
        <div id="emailcont">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"/>
            <br/>
            <div class="msgcont">
                <label for="message">Message:</label><br/>
                <textarea name="message" rows="14" cols="100" wrap="soft"> </textarea>
            </div>
            <br/>
            <input type="submit" value="Submit" id="submit"/>
        </div>

        <div class="contact-footer">
            <a href="https://github.com/lrn-w/" id="github">
                <i> <GitHub/></i>
            </a>
            <a href="https://www.linkedin.com/in/lauren-woods1/" id="linkedin">
                <i> <Linkedin/></i>
            </a>
        <p>
            Created by Lauren Woods
        </p>
        </div>
            </div>
        );
    }
}

export default Contact;