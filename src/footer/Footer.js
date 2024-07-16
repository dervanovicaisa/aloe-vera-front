import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import AloeVerPng from "../assets/aloe-vera.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer mt-auto pt-5 border-top">
      <Container className="pt-lg-4 pt-0 px-xxl-0 px-xl-0 px-lg-0 px-md-0 px-sm-4">
        <Row className="pb-5 max-width">
          <Col xxl={4} xl={4} lg={4} md={4}>
            <h4 className="text-dark">O nama</h4>
            <p className="w-75">
              Posvećeni smo pružanju proizvoda visokog kvaliteta i izvrsne
              usluge za korisnike.
            </p>
            <h4 className="text-dark">Povežite se s nama</h4>
            <div className="d-flex flex-column">
              <p className="mb-0">
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
          <Col xxl={4} xl={4} lg={6} md={6} className="footer-form">
            <h4 className="text-dark">Preplatite se na našim objavama</h4>
            <Form className="mt-4">
              <Row className="align-items-center">
                <Col className="pe-0">
                  <Form.Group controlId="formBasicEmail" className="w-100">
                    <Form.Control type="email" placeholder="Unesite email" />
                  </Form.Group>
                </Col>
                <Col xxl={5} xl={5} lg={5} md={6} sm={6} className="ps-0">
                  <Button variant="success" type="submit" className="mx-2">
                    Pretplatite se
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
      <div className="text-center text-light bg-success py-3 px-xxl-0 px-xl-0 px-lg-0 px-md-0 px-sm-2">
        <p className="mb-0 pb-0">
          © 2023 Forever Living Products VH. Sva prava su rezervisana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
