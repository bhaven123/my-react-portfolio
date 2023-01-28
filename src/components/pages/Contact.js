import {
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container id="contact" className="w-75 min-vh-100">
      <h1
        className="w-25 text-center border-3 border-bottom border-secondary border-end mb-5 pb-3 fs-1 fw-bolder mx-auto"
        style={{ color: "#ccd6f6" }}
      >
        Contact <span style={{ color: "purple" }}>Me!</span>
      </h1>
      <Form
        method="POST"
        action="https://getform.io/f/70a7734a-55fd-4bb8-a0f6-54e393d648d8"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="formName">
              <FloatingLabel
                controlId="floatingName"
                label="Your Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formEmail">
              <FloatingLabel
                controlId="floatingEmail"
                label="Your Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formMessage">
          <FloatingLabel
            controlId="floatingMessage"
            label="Your Message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              style={{ height: "150px" }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid message.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="text-center py-3 mb-4">
          <Button variant="outline-info" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contact;
