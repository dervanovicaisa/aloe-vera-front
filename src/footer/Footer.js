import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import AloeVerPng from "../assets/aloe-vera.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer mt-auto pt-5 border-top">
      <Container className="pt-lg-4 pt-0">
        <Row className="pb-5">
          <Col md={4}>
            <h4 className="text-dark">About Us</h4>
            <p className="w-75">
              We are committed to providing high-quality products and excellent
              customer service.
            </p>
            <h5 className="text-dark">Connect With Us</h5>
            <address className="d-flex flex-column">
              <span>
                Instagram:
                <a
                  className="mx-1"
                  href="https://www.instagram.com/forever_living_products_vh"
                  target="_blank"
                  rel="noreferrer"
                >
                  @forever_living_products_vh
                </a>
              </span>
              <span>
                Email:{" "}
                <a
                  className="text-decoration-none"
                  href="mailto:valdetahadzajlic@gmail.com"
                >
                  valdetahadzajlic@gmail.com
                </a>
              </span>
              {/* <span>Phone: 069549938</span> */}
            </address>
          </Col>
          <Col md={6} className="footer-form">
            <h3 className="text-dark">Subscribe to Our Newsletter</h3>
            <Form className="d-flex align-items-center justify-content-between mt-4">
              <Form.Group controlId="formBasicEmail" className="w-100">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="success" type="submit" className="mx-2">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="aloe-vera-png">
        <Image src={AloeVerPng} />
      </div>
      <div className="text-center text-light bg-success py-3">
        <p className="mb-0 pb-0">
          © {new Date().getFullYear()} Forever Living Products VH. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
