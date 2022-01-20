import { Navbar, Nav, Container } from 'react-bootstrap';
import {Routes , Route, Link, useNavigate} from "react-router-dom";
import About from '../About/About';
import Login from '../Authentication/Login';
import {Register} from '../Authentication/Register';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import { Home } from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';

export const Menu = () =>{

    
    let history = useNavigate();
    const userInfo = localStorage.getItem('users')
    const logout = () =>
    {
        localStorage.removeItem('users')
        history('/')
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Shah Code</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blogs</Nav.Link>
                        <Nav.Link as={Link} to={"/portfolio"}>Portfolio</Nav.Link>
                        <Nav.Link as={Link} to={"/about-us"}>About us</Nav.Link>
                        <Nav.Link as={Link} to={"/contact-us"}>Contact us</Nav.Link>
                        
                        {/* <Link style={{ color: '#368684', margin: '0 5px', textDecoration: 'none' }} to="/">Home</Link>
                        <Link style={{ color: '#368684', margin: '0 5px', textDecoration: 'none' }} to="/blog">Blogs</Link>
                        <Link style={{ color: '#368684', margin: '0 5px', textDecoration: 'none' }} to="/about-us">About us</Link>
                        <Link style={{ color: '#368684', margin: '0 5px', textDecoration: 'none' }} to="/contact-us">Contact us</Link> */}
                    </Nav>
                    <Nav className="d-flex">
                        {userInfo}
                        { userInfo ? 
                                <Nav.Link onClick={logout} className="btn btn-primary text-white">Logout</Nav.Link>
                            :   <Nav.Link as={Link} to={"/login"} className="btn btn-primary text-white">Login</Nav.Link>
                        }
                        {/* <Nav.Link as={Link} to={"/login"} className="btn btn-primary text-white">Login</Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register  />} />
            </Routes>
        </div>
    )
}