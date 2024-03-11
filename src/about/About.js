import "./about.css";
import CradImage from "../assets/cover-img.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { Flower2 } from "react-bootstrap-icons";
function About() {
  return (
    <div id="about" className="border-bottom">
      <Row className="px-5 pt-5 pb-4 m-0">
        <Col lg={4}>
          <Card className="w-75 box-shadow-img border-0">
            <Card.Img src={CradImage}></Card.Img>
          </Card>
        </Col>
        <Col className="d-flex flex-column gap-5">
          <Row>
            <Col lg={9}>
              <h4>
                We create skincare using the nest ingredients from aloe vera
                plants.
              </h4>
            </Col>
          </Row>
          <Row className="gap-5">
            <Col lg={4} className="d-flex flex-column gap-4">
              <div className="circle-icon fit-content">
                <Flower2 />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas non orci sit amet lacus malesuada maximus sit amet at
                sem. Quisque quis lectus id ipsum euismod pretium.Quisque quis
                lectus id ipsum euismod pretium.
              </p>
            </Col>
            <Col lg={4} className="d-flex flex-column gap-4">
              <div className="circle-icon fit-content">
                <Flower2 />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas non orci sit amet lacus malesuada maximus sit amet at
                sem. Quisque quis lectus id ipsum euismod pretium.Quisque quis
                lectus id ipsum euismod pretium.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
