import React from 'react';
import './Work.scss';
import closet from '../../imgs/closet.png';

function Work() {
    return (
        <div id="work" className="work">
            <h1>My work</h1>
            <h3 className="work__subHeading">Projects</h3>
            <div className="work__categories">
                <button className="work__btn active">All</button>
                <button className="work__btn">Full Stack</button>
                <button className="work__btn">Back-end</button>
            </div>

            <div className="work__projects">
                <a
                    target="_blank"
                    href="https://stylish-closet.firebaseapp.com/"
                    className="work__project"
                >
                    <img
                        src={closet}
                        alt="closet"
                        className="work__img"
                    />
                    <div className="work__desc">
                        <h3>Closet Organizer</h3>
                        <span>●Tools used: HTML, CSS, JavaScript, React, Firebase</span>
                        <span>●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.</span>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://stylish-closet.firebaseapp.com/"
                    className="work__project"
                >
                    <img
                        src={closet}
                        alt="closet"
                        className="work__img"
                    />
                    <div className="work__desc">
                        <h3>Closet Organizer</h3>
                        <span>●Tools used: HTML, CSS, JavaScript, React, Firebase</span>
                        <span>●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.</span>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://stylish-closet.firebaseapp.com/"
                    className="work__project"
                >
                    <img
                        src={closet}
                        alt="closet"
                        className="work__img"
                    />
                    <div className="work__desc">
                        <h3>Closet Organizer</h3>
                        <span>●Tools used: HTML, CSS, JavaScript, React, Firebase</span>
                        <span>●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.</span>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://stylish-closet.firebaseapp.com/"
                    className="work__project"
                >
                    <img
                        src={closet}
                        alt="closet"
                        className="work__img"
                    />
                    <div className="work__desc">
                        <h3>Closet Organizer</h3>
                        <span>●Tools used: HTML, CSS, JavaScript, React, Firebase</span>
                        <span>●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.</span>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://stylish-closet.firebaseapp.com/"
                    className="work__project"
                >
                    <img
                        src={closet}
                        alt="closet"
                        className="work__img"
                    />
                    <div className="work__desc">
                        <h3>Closet Organizer</h3>
                        <span>●Tools used: HTML, CSS, JavaScript, React, Firebase</span>
                        <span>●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.</span>
                    </div>
                </a>
                
            </div>
        </div>
    )
}

export default Work;
