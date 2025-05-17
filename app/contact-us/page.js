"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Header />

      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
          <Row>
            {/* Contact Info */}
            <Col md={6} className="mb-4">
              <h5 className="fw-bold mb-3">Get in Touch</h5>
              <p>
                We’re here to help and answer any question you might have. Reach
                out to us and we’ll respond as soon as we can.
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>Phone:</strong> +1-866-294-3029
                </li>
                <li>
                  <strong>Email:</strong> support@flightsforreservations.com
                </li>
                <li>
                  <strong>Address:</strong> 222 NE 44TH ST MIAMI, FL 33138
                </li>
              </ul>
            </Col>

            {/* Contact Form */}
            <Col md={6}>
              <Form>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label className="text-dark">Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label className="text-dark">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="subject" className="mb-3">
                  <Form.Label className="text-dark">Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                  <Form.Label className="text-dark">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default page;
