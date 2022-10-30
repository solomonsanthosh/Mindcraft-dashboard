import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./AddCoach/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { createCoach, postMusic } from "../axios/index.axios";

function AddMusic() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  const [link, setLink] = useState("");
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      console.log("err");
      // event.preventDefault();
      // event.stopPropagation();
    } else {
        postMusic(name,topic,link)
        window.location.reload();
    }
    // createCoach(name,email,experience,about,fee)
    

    // setName("");
    // setLink("");
  };
  return (
    <div className="main">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Song name</Form.Label>
          <Form.Control
            required
            hasValidation
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Link</Form.Label>
          <Form.Control
            required
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            // placeholder="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Topic</Form.Label>
          <Form.Select  required  as="select" value={topic}  onChange={(e)=>setTopic(e.target.value)} aria-label="Default select example">
            <option  value='' aria-disabled >Select a Topic</option>
            <option    value="stress">stress</option>
            <option value="career">Career</option>
            <option value="studies">Studies</option>
          </Form.Select>
        </Form.Group>

        <Button style={{ marginTop : "1rem" }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </div>
  );
}

export default AddMusic;
