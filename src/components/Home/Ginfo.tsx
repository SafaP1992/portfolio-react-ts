import { Badge,ListGroup, Button, Card, Col, Container, Row } from "react-bootstrap"

export const Ginfo = () => {
    return (
        <div className="list">
            <h2 className="mb-3">My Works</h2>

            <Container>
                <Row>
                    <Col sm={4}>
                        <Card style={{ width: '100%', margin: '3px' }}>
                            <Card.Img variant="top" src={require('../../img/2.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '100%', margin: '3px' }}>
                            <Card.Img variant="top" src={require('../../img/5.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '100%', margin: '3px' }}>
                            <Card.Img variant="top" src={require('../../img/3.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        
            

            {/* <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge pill>1</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge pill>41</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge pill>3</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge pill>24</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Cras justo odio</div>
                    <Badge pill>32</Badge>
                </ListGroup.Item>
            </ListGroup> */}
        </div>
    )
}