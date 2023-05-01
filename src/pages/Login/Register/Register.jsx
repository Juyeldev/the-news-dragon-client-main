import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { useState } from 'react';

const Register = () => {

    const {createUser}= useContext(AuthContext);
    const [accept, setAccept]= useState(false);


    const handleRegister=event=>{
        event.preventDefault();
        const form= event.target;
        const name=form.name.value;
        const email= form.email.value;
        const photo=form.photo.value;
        const password= form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result=>{
            const createdUser= result.user;
            console.log(createdUser);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleAccept=event=>{
        setAccept(event.target.checked);
    }



    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo Url" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" 
                onClick={handleAccept}
                name="accept" 
                label={<>Accept <Link to="/terms">terms and condition</Link> </>} />
            </Form.Group>
            <Button  disabled={!accept} variant="primary" type="submit">
                Register
            </Button>
            <br/>
            <Form.Text className="text-secondary">
            Already have an Account? <Link to='/login'> Login</Link>
            </Form.Text>
            <Form.Text className="text-success">
                
            </Form.Text>
            <Form.Text className="text-danger">
                
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;