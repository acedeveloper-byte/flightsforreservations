import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer pt-5 text-white mt-5">
      <Container>
        <Row className="gy-4">
          {/* Help Section */}
          <Col md={4}>
            <h5 className="mb-3">Need flightsforreservations Help?</h5>
            <p
              className="border p-3 rounded"
              style={{ borderColor: "#fff3", borderStyle: "dashed" }}
            >
              <small>Got Questions? Call us 24/7!</small>
              <br />
              <strong>Call Us:</strong>{" "}
              <span className="text-danger">+1-866-294-3029</span>
            </p>
            <h6 className="mt-4">Contact Info</h6>
            <p>Location: 222 NE 44TH ST MIAMI, FL 33138</p>
            <div className="d-flex gap-2">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Company */}
          <Col md={3}>
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us </a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms of Use</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Statement</a>
              </li>
              <li>
                <a href="/contact-us">Feedbacks</a>
              </li>
            </ul>
          </Col>

          {/* Support */}

          {/* Mailing List */}
          <Col md={5}>
            <h6 className="mb-3">Mailing List</h6>
            <p>Sign up for our mailing list to get latest updates and offers</p>
            <Form className="d-flex flex-column flex-sm-row gap-2">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="rounded"
              />
              <Button variant="danger" className="px-4">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4 text-light" />

        {/* Bottom bar */}
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              width={200}
              height={50}
            />
            <div className="ms-3 text-white-50">
              2025 flightsforreservations. All rights reserved.
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Image
              src="/images/payments.png"
              alt="MasterCard"
              width={300}
              height={25}
            />
          </div>
          <div className="d-flex gap-2">
            <Form.Select size="sm" className="rounded">
              <option>English (United States)</option>
              <option>English (UK)</option>
            </Form.Select>
            <Form.Select size="sm" className="rounded">
              <option>$ USD</option>
              <option>€ EUR</option>
            </Form.Select>
          </div>
        </div>
        <div className="text-center mt-3 small">
          <a
            href="/terms-and-conditions"
            className="text-light text-decoration-none mx-2"
          >
            Terms of Use
          </a>
          |
          <a
            href="/privacy-policy"
            className="text-light text-decoration-none mx-2"
          >
            Privacy
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
