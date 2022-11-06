import React, { Fragment } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Footer from "../Coponents/Footer/Footer";
import TopNavbar from "../Coponents/Header/TopNavbar";

function Contact() {
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="w-50 mx-auto my-5">
          <Card>
            <Card.Header>
              <h3 className="text-center">Contact With Us</h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John Smith"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="smith@example.com"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <textarea
                    className="form-control"
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Your message"
                  ></textarea>
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" variant="dark">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Contact;
