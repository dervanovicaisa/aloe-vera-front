import { Button, Col, Row, Image } from "react-bootstrap";
import "./home.css";
import AloeVeraImage from "../assets/cover-image1.jpg";
function Home() {
  return (
    <div id="home" className="border-bottom">
      <Row className="home px-0 mx-0">
        <Col lg={5} className="left-text px-5 py-5 py-lg-0">
          <div className="w-100 d-lg-flex flex-column gap-3 d-none">
            <h4 className="title">Feel Comfortable in Flawless Skin</h4>
            <p className="subtext text-justify">
              Achieve a natural, smooth complexion with Aloe Vera long-lasting,
              non-oily coverage foundation. This lightweight foundation blends
              seamlessly into your skin, providing a flawless finish that lasts
              all day. Enriched with the soothing properties of Aloe Vera, it
              hydrates your skin while ensuring a matte, shine-free look.
              Perfect for all skin types, this foundation offers buildable
              coverage that conceals imperfections without clogging pores.
              Experience the perfect balance of skincare and makeup with our
              Aloe Vera foundation, giving you a radiant, healthy glow.
            </p>
            <Button className="btn-success shop-now w-50" href="products">
              Shop now
            </Button>
          </div>
        </Col>
        <Col lg={7} className="px-0 right-text d-none d-lg-block">
          <Image
            src={AloeVeraImage}
            loading="lazy"
            className="image img-responsive"
          />
        </Col>
      </Row>
      <div
        id="mobile-text"
        className="w-75 d-flex d-lg-none flex-column gap-3 position-absoulute"
      >
        <h4 className="title">Feel Comfortable in Flawless Skin</h4>
        <p className="subtext">
          Achieve a natural, smooth complecion with Aloe Vera long-lasting,
          non-oily coverage fundation
        </p>
        <Button className="btn-success shop-now w-50" href="products">
          Shop now
        </Button>
      </div>
    </div>
  );
}

export default Home;
