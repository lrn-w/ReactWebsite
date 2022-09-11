import React, {Component} from "react";
import './AboutMe.css'
import {GitHub, Linkedin} from 'react-feather';
import bread from './media/button.gif';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <div class="about">
            <h1>About Me</h1>
            <hr id="bar"/>
            <img src={bread} alt="raspberry pi" id="about-photo"/>  
            <p>
                I am currently working as a real-time software engineer, specializing in embedded programming for aircrafts. I graduated from Tuskegee University with a BS in Computer Science and a MS in Computer Science from the Oklahoma Christian University with an emphasis in Software Engineering. 
            </p>
            <br/>
            <h1 id="but">But who really is Lauren?</h1>
            
            <p>My interest in computers started at a very young age when I began playing Microsoft Paint on my fathers Window's 95 HP Compaq Presario. From Paint, I moved on to playing online games like Millsberry and Club Penguin. With enough exposure to websites I learned alot about HTML from downloading templates to customize personal webpages. It wasn't long before this that I began to take apart my laptops to learn more about these machines. After burning the motherboards of several laptops (...sorry mom & dad), I realized that I was fascinated with the Internet and computers. I decided this is what I wanted to study.
</p>
            <p>
                In my undergraduate experience, I gained a lot of exposure to the type of projects that I enjoy working on from tinkering with breadboards to programming drones. I am passionate about creating innovative solutions to modern problems that can benefit a community. I enjoy being apart of the entire process, from the initial design, planning, implementation, testing, and deployment. Seeing the end result and how it can improve someone's day to day is very fulfilling. I want to find ways to create convenience and better streamline processes.
            </p>

            <p>
                When I'm not immersed in my work, I'm playing video games, enjoying new foods, traveling, consuming various forms of media, or finding some new experience to do with friends. 
            </p>
        </div>
        <div class="about-footer">
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

export default AboutMe;