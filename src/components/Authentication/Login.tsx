import axios from 'axios'
import React, { useState, ChangeEvent } from 'react'
import { Button, Form, Container, Row, Col} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [msg, setMsg] = useState('')
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const [user, setUser] = useState({
        email: "",
        password:""
    })

    let history = useNavigate()

    const {email, password} = user;
    
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name]: event.target.value })
    }

    // const signIn = () => {
    const signIn = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const users = {username}; //To store in Localstore and send to home Paginate

        if(user.email === '') {
            alert('Email field is empty');
        }else if(user.password === ''){
            alert('Password field is empty');
        }

        const res = axios.post('http://localhost:8000/api/login', user)
        .then(response => {
            setMsg(response.data);
            localStorage.setItem('users', response.data);
            history("/");
        });


    }


    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4} className="my-5"></Col>
                    <Col sm={4} className="my-5 text-left">
                        <Form onSubmit={signIn}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInput} value={email}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} value={password}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <Link to={"/register"}>I don't have any account yet!</Link>
                    </Col>
                    <Col sm={4} className="my-5"></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login