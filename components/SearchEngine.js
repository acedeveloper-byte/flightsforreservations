'use client'
import React from 'react';
import { Button, Form, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="text-center text-white">
          <h1 className="hero-title">Book Premium Flights at Low  <br />Fares!</h1>
          <div className="btn-group mt-4">
            <Button className="explore-btn me-3">Explore More</Button>
            <Button className="contact-btn explore-btn">Contact Us</Button>
          </div>
        </div>

       <div className="search-box mb-15  ">
  <div className="trip-toggle mb-3 text-center">
    <ToggleButtonGroup type="radio" name="trip" defaultValue={1}>
      <ToggleButton id="round" value={1} variant="outline-danger">Round Trip</ToggleButton>
      <ToggleButton id="oneway" value={2} variant="outline-danger">One Way</ToggleButton>
      <ToggleButton id="multi" value={3} variant="outline-danger">Multi City</ToggleButton>
    </ToggleButtonGroup>
  </div>

  <Form>
    <Row className="g-3 align-items-end">
      <Col md>
        <Form.Label>Flying From</Form.Label>
        <div className="input-icon">
          <span className="icon">📍</span>
          <Form.Control placeholder="Where are You Going" />
        </div>
      </Col>
      <Col md>
        <Form.Label>Flying To</Form.Label>
        <div className="input-icon">
          <span className="icon">📍</span>
          <Form.Control placeholder="Where are You Going" />
        </div>
      </Col>
      <Col md>
        <Form.Label>Depart Date</Form.Label>
        <div className="input-icon">
          <span className="icon">📅</span>
          <Form.Control type="date" />
        </div>
      </Col>
      <Col md>
        <Form.Label>Return Date</Form.Label>
        <div className="input-icon">
          <span className="icon">📅</span>
          <Form.Control type="date" />
        </div>
      </Col>
      <Col md>
        <Form.Label>Person</Form.Label>
        <div className="input-icon">
          <span className="icon">👤</span>
          <Form.Select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Select>
        </div>
      </Col>
      <Col md="auto">
        <Button variant="danger" className="mt-3 px-4">FIND NOW</Button>
      </Col>
    </Row>
  </Form>
</div>

      </div>
    </div>
  );
};

export default HeroSection;
