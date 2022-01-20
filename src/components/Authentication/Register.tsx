import React, { Component, useState, useRef, ChangeEvent } from "react"
// import { useRef, useEffect, useState } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Register = () => {
// export default class Register extends Component {

    const state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    }
    
    const data = {"first_name":'safa',"lastname":"pour","email":"safa@gmail.com","password":"123456789"};
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })
    // const {first_name, last_name, email, password} = form;

    /* ******************************************** */
    /* This code only get a value */
    // const [data,setData]=useState(null)
    // const [print,setPrint]=useState(false)
    // function getData(val: any)
    // {
    //     console.warn(val.target.value)
    //     setData(val.target.value)
    //     setPrint(false)
    // }
    /* ******************************************** */


    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value })
    }
    
    const showState = () => {
        console.log(form)
    }

    const saveStudent = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/register', form);
        
        if(res.data.status === 200)
        {
            console.log('saved')
            // console.log(res.data.message);
            // Swal.fire({
            //     title: 'Success!',
            //     text: res.data.message,
            //     icon: 'success',
            //     confirmButtonText: 'Ok!'
            // });
            setForm({first_name: '', last_name: '', email: '', password:''})
        }
    }
    // render (){
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={4} className="my-5"></Col>
                        <Col sm={4} className="my-5 text-left">
                            <Form onSubmit={saveStudent}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name="first_name" onChange={handleInput} value={form.first_name} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name="last_name" onChange={handleInput} value={form.last_name} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInput} value={form.email} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicRePassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} value={form.password} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Retype Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="re_password"/>
                                </Form.Group>
                                    {/* <div>{print ? <h1>{data}</h1> : null}</div> */}
                                {/* <Button variant="primary" type="submit" onClick={()=>setPrint(true)}> */}
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form>
                            <Link to={"/login"}>I have an account.</Link>
                        </Col>
                        <Col sm={4} className="my-5"></Col>
                    </Row>
                </Container>
            </div>
        )
    // }
}
