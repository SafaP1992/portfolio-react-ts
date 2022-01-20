import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Paginate from '../Partials/Paginate'

export class Blog extends Component {
    static propTypes = {

    }

    render() {
        return (
        <div className="list">
            <h2 className="mb-3">Blogs</h2>

            <Container>
                <Row>
                    <Col sm={4} className="my-2">
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
                    <Col sm={4} className="my-2">
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
                    <Col sm={4} className="my-2">
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
                    <Col sm={4} className="my-2">
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
                    <Col sm={4} className="my-2">
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
                    <Col sm={4} className="my-2">
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
                <Row style={{ margin: '20px 0' }}>
                    <Col>
                        <Paginate />
                    </Col>
                </Row>
            </Container>
        
            </div>
        )
    }
}

export default Blog
