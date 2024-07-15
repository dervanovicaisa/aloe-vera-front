import { Button, Col, Row, Image } from "react-bootstrap";
import "./home.css";
import AloeVeraImage from "../assets/cover-image1.jpg";
function Home() {
  return (
    <div id="home" className="border-bottom">
      <div className="md-bg-added">
        <Row className="home-row align-items-center">
          <Col
            xxl={5}
            xl={5}
            lg={12}
            md={12}
            sm={12}
            sx={12}
            className="px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-sm-5 py-sm-5 py-xxl-0 py-xl-0"
          >
            <div>
              <div className="d-flex flex-column gap-3">
                <h1>Feel Comfortable in Flawless Skin</h1>
                <p className="text-justify d-lg-block d-md-none d-sm-none">
                  Achieve a natural, smooth complexion with Aloe Vera
                  long-lasting, non-oily coverage foundation. This lightweight
                  foundation blends seamlessly into your skin, providing a
                  flawless finish that lasts all day. Enriched with the soothing
                  properties of Aloe Vera, it hydrates your skin while ensuring
                  a matte, shine-free look. Perfect for all skin types, this
                  foundation offers buildable coverage that conceals
                  imperfections without clogging pores. Experience the perfect
                  balance of skincare and makeup with our Aloe Vera foundation,
                  giving you a radiant, healthy glow.
                </p>
                <p className="text-justify d-lg-none d-md-block d-sm-block d-xs-block">
                  Achieve a natural, smooth complexion with Aloe Vera
                  long-lasting, non-oily coverage foundation. This lightweight
                  foundation blends seamlessly into your skin, providing a
                  flawless finish that lasts all day. Enriched with the soothing
                  properties of Aloe Vera, it hydrates your skin while ensuring
                  a matte, shine-free look.
                </p>
                <Button
                  className="shop-now w-50"
                  variant="success"
                  href="products"
                >
                  Shop now
                </Button>
              </div>
            </div>
          </Col>
          <Col xxl={7} xl={7} className="d-none d-xxl-block d-xl-block">
            <Image
              src={AloeVeraImage}
              loading="lazy"
              className="image w-100 img-responsive"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
