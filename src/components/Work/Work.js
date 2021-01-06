import React from 'react';
import { Card } from 'react-bootstrap';
import './Work.scss';
// import closet from '../../../public/imgs/closet.png';
import closet from '../../imgs/closet.png';
import { Button } from '@material-ui/core';

function Work() {
    return (
        <div id="work" className="work">
            <h1>My work</h1>
            <h3>Projects</h3>
            <div className="work__categories">
                <button className="work__btn">All</button>
                <button className="work__btn">Full Stack</button>
                <button className="work__btn">Back-end</button>
            </div>
            <div className="work__react">
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                            ●Tools used: HTML, CSS, JavaScript, React, Firebase
                        </Card.Text>
                        <Card.Text className="work__cardDesc">
                        ●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="outlined" color="primary">
                            <a className="work__link" target="_blank" href="https://stylish-closet.firebaseapp.com/">
                                Explore the app
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                            ●Tools used: HTML, CSS, JavaScript, React, Firebase
                        </Card.Text>
                        <Card.Text className="work__cardDesc">
                        ●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="outlined" color="primary">
                            <a className="work__link" target="_blank" href="https://stylish-closet.firebaseapp.com/">
                                Explore the app
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                            ●Tools used: HTML, CSS, JavaScript, React, Firebase
                        </Card.Text>
                        <Card.Text className="work__cardDesc">
                        ●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="outlined" color="primary">
                            <a className="work__link" target="_blank" href="https://stylish-closet.firebaseapp.com/">
                                Explore the app
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                            ●Tools used: HTML, CSS, JavaScript, React, Firebase
                        </Card.Text>
                        <Card.Text className="work__cardDesc">
                        ●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="outlined" color="primary">
                            <a className="work__link" target="_blank" href="https://stylish-closet.firebaseapp.com/">
                                Explore the app
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                            ●Tools used: HTML, CSS, JavaScript, React, Firebase
                        </Card.Text>
                        <Card.Text className="work__cardDesc">
                        ●Created an app that allows users to organize their closets virtually and have a grasp on all their clothing much faster in a highly time-efficient manner.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="outlined" color="primary">
                            <a className="work__link" target="_blank" href="https://stylish-closet.firebaseapp.com/">
                                Explore the app
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    )
}

export default Work;
