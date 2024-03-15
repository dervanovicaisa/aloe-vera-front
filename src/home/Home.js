import { Button, Col, Row, Image } from "react-bootstrap";
import "./home.css";
import AloeVeraImage from "../assets/cover-image1.jpg";
function Home() {
  return (
    <div>
      <Row className="home px-0 mx-0 border-bottom">
        <Col lg={5} className="left-text">
          <div className="w-75 d-flex flex-column gap-3">
            <h4 className="title">Feel Comfortable in Flawless Skin</h4>
            <p className="subtext">
              Achieve a natural, smooth complecion with Aloe Vera long-lasting,
              non-oily coverage fundation
            </p>
            <Button className="btn-success shop-now w-50" href="products">
              Shop now
            </Button>
          </div>
        </Col>
        <Col className="px-0 right-text">
          <Image src={AloeVeraImage} className="image img-responsive" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
