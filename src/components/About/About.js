import React from 'react';
import './About.scss';
import uoft from '../../imgs/uoft.jpg';
import brain from '../../imgs/brain.png';

function About() {
    return (
        <div id="about" className="about">
            <h1>About me</h1>
            <p>
                I'm an optimistic, eager to learn, and passionate junior full-stack developer looking for a full-time job where I can grow. I'm continuously developing through cloning the react apps and learning new languages. Stay tuned for my recent works work. Thank you!
            </p>

            <div className="about__majors">
                <div className="about__major">
                    <div className="about__icon">
                        <i class="fab fa-html5"></i>
                    
                    </div>
                    <h2 className="about__title">
                        Front-end
                    </h2>
                    <div className="about__desc">
                        HTML, CSS, JavaScript
                         <br /> React, Web APIs
                    </div>
                </div>
                
                <div className="about__major">
                    <div className="about__icon">
                        <i class="fas fa-server"></i>
                    
                    </div>
                    <h2 className="about__title">
                        Back-end
                    </h2>
                    <div className="about__desc">
                        JavaScript, NodeJS
                         <br /> Rest APIs
                    </div>
                </div>    
            </div>

            <div className="about__schools">
                    <div className="about__school">
                        <img src={brain} alt="brain" className="about__logo" />
                        <div className="about__schoolDesc">
                            <p className="about__name">BrainStation,  Web Development Diploma</p>
                            <p className="about__period">2020-2020</p>
                        </div>
                    </div>
                
                    <div className="about__school">
                        <img src={uoft} alt="toronto" className="about__logo" />
                        <div className="about__schoolDesc">
                            <p className="about__name">University of Toronto, Bachelor's of Science</p>
                            <p className="about__period">2013-2018</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;
