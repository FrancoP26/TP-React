
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
    return (
        <div>
            <h2>About Us</h2>
            <div style={{ display: 'flex', paddingLeft: '40px', justifyContent: 'space-evenly', alignContent: 'center' }}>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="src/assets/images/card1.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="src/assets/images/card2.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="src/assets/images/card3.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default AboutUs;