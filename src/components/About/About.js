import React from 'react';
import './About.css';

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
                    <div className="about__title">
                        Front-end
                    </div>
                    <div className="about__desc">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
