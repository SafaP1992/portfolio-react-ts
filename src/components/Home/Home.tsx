import { Container, Row, Col } from 'react-bootstrap';
import { Ginfo } from './Ginfo';
import { Header } from './Header';

export const Home = () => {
    return (
        <div className="home">
            <Container fluid>
                <Row>
                    <Col sm={6} className="p-0">
                        <Header />
                    </Col>
                    <Col sm={6} className="p-0">
                        <Ginfo />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}