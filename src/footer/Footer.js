import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import AloeVerPng from "../assets/aloe-vera.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer mt-auto pt-5 border-top">
      <Container className="pt-lg-4 pt-0">
        <Row className="pb-5 max-width">
          <Col xxl={4} xl={4} lg={4} md={4}>
            <h4 className="text-dark">About Us</h4>
            <p className="w-75">
              We are committed to providing high-quality products and excellent
              customer service.
            </p>
            <h4 className="text-dark">Connect With Us</h4>
            <div className="d-flex flex-column">
              <p>
                Instagram:
                <a
                  className="mx-1"
                  href="https://www.instagram.com/aloe_vera_vh"
                  target="_blank"
                  rel="noreferrer"
                >
                  @aloe_vera_vh
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="text-decoration-none"
                  href="mailto:valdetahadzajlic@gmail.com"
                >
                  aloeveravh@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={6} className="footer-form">
            <h4 className="text-dark">Subscribe to Our Newsletter</h4>
            <Form className="mt-4">
              <Row className="align-items-center">
                <Col sm={7}>
                  <Form.Group controlId="formBasicEmail" className="w-100">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3} sm={2}>
                  <Button variant="success" type="submit" className="mx-2">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="aloe-vera-png">
        <Image src={AloeVerPng} className="img-responsive" />
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
