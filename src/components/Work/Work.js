import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Work.scss';
// import closet from '../../../public/imgs/closet.png';
import closet from '../../imgs/closet.png';

function Work() {
    return (
        <div id="work" className="work">
            <Card className="work__card" style={{ width: '18rem' }}>
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
            <Card className="work__card" style={{ width: '18rem' }}>
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
            <Card className="work__card" style={{ width: '18rem' }}>
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
            <Card className="work__card" style={{ width: '18rem' }}>
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
    )
}

export default Work;
