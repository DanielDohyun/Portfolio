import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Work.scss';
// import closet from '../../../public/imgs/closet.png';
import closet from '../../imgs/closet.png';

function Work() {
    return (
        <div id="work" className="work">
                <h1>React App</h1>
            <div className="work__react">
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                {/* style={{ width: '18rem' }} */}
                <Card className="work__card" >
                    <Card.Img className="work__cardImg" variant="top" src={closet} />
                    <Card.Body>
                        <Card.Title className="work__cardTitle">Closet Organizer</Card.Title>
                        <Card.Text className="work__cardDesc">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="work__cardBtn" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    )
}

export default Work;
