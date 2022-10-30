
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
import { createCoach } from '../../axios/index.axios';

function Index() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState(null)
  const [about, setAbout] = useState('')
  const [fee, setFee] = useState(null)
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.currentTarget;
    console.log('jo',name);
    if (form.checkValidity() === false) {
      console.log('err');
      // event.preventDefault();
      // event.stopPropagation();
    }
    createCoach(name,email,experience,about,fee)
    setValidated(true)
    setAbout('')
    setName('')
    setEmail('')
    setExperience(null)
    setFee(null)
  }
  return (
    <div className='main'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required hasValidation value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control required  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Experience</Form.Label>
        <Form.Control  required value={experience} onChange={(e)=>setExperience(e.target.value)} type="number" placeholder="Enter experience" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>About</Form.Label>
        <Form.Control required  value={about} onChange={(e)=>setAbout(e.target.value)} type="textarea"  />
        {/* <Form.Text className="text-muted">
          
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fee</Form.Label>
        <Form.Control  required value={fee} onChange={(e)=>setFee(e.target.value)} type="number" placeholder="Enter fee" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
    </div>
  )
}

export default Index