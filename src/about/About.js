import "./about.css";
import CradImage from "../assets/cover-img.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { Dot } from "react-bootstrap-icons";
import { useState } from "react";
function About() {
  const [clicked, setClicked] = useState(1);
  return (
    <div id="about">
      <Row className="px-sm-4 pt-5">
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Row
            id="about-row"
            className="p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-2 gap-3 align-items-center"
          >
            <Col
              xxl={4}
              xl={4}
              lg={4}
              className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none"
            >
              <Card className="box-shadow-img border-0">
                <Card.Img src={CradImage}></Card.Img>
              </Card>
            </Col>
            <Col>
              <Row className="gap-3">
                <Col xxl={12} xl={11} lg={11}>
                  <h1>
                    We create skincare using the nest ingredients from aloe vera
                    plants.
                  </h1>
                </Col>
                <Col xxl={11} xl={11} lg={12} className="text-justify">
                  <p className="text-justify d-none fs-xxl-4 d-xxl-block d-xl-block d-lg-block">
                    Experience the revitalizing touch of Aloe Vera with our
                    thoughtfully curated selection of skincare and wellness
                    essentials. From gentle cleansers to deeply nourishing
                    creams, our comprehensive Aloe Vera skincare range ensures
                    hydration and restores balance for radiant, healthy-looking
                    skin. Elevate your hair care ritual with our luxurious Aloe
                    Vera-infused shampoos and conditioners, leaving your locks
                    irresistibly soft, lustrous, and beautifully moisturized.
                    Discover the myriad natural benefits of Aloe Vera and embark
                    on a holistic journey of self-care, embracing the daily
                    beauty of healthier skin and hair with every use.
                  </p>
                  <p className="text-justify d-none d-xxl-block d-xl-block  d-lg-block">
                    Embrace the natural goodness of Aloe Vera with our
                    collection of soothing skincare and hair care products.
                    Pamper your skin with gentle cleansers and rejuvenating
                    masks, while our Aloe Vera-infused shampoos and conditioners
                    provide hydration and vitality to your hair. Discover the
                    holistic benefits of Aloe Vera supplements, promoting
                    digestive health and supporting immune function, and indulge
                    in a renewed sense of well-being. Whether you're starting
                    your day with a refreshing skincare routine or enhancing
                    your overall wellness with Aloe Vera supplements, embrace
                    nature's gift for nourished skin, hair, and vitality.
                  </p>
                  {/* mobile version */}
                  <Row className="d-flex d-xxl-none d-xl-none d-lg-none gap-2">
                    <Col
                      sm={12}
                      xs={12}
                      className={
                        clicked === 1
                          ? "d-flex flex-column pt-0 gap-4"
                          : "d-flex flex-column gap-4 d-none"
                      }
                      onClick={() => setClicked(2)}
                    >
                      <p>
                        Experience the revitalizing touch of Aloe Vera with our
                        thoughtfully curated selection of skincare and wellness
                        essentials. From gentle cleansers to deeply nourishing
                        creams, our comprehensive Aloe Vera skincare range
                        ensures hydration and restores balance for radiant,
                        healthy-looking skin. Elevate your hair care ritual with
                        our luxurious Aloe Vera-infused shampoos and
                        conditioners, leaving your locks irresistibly soft,
                        lustrous, and beautifully moisturized. Discover the
                        myriad natural benefits of Aloe Vera and embark on a
                        holistic journey of self-care, embracing the daily
                        beauty of healthier skin and hair with every use.
                      </p>
                    </Col>
                    <Col
                      sm={12}
                      xs={12}
                      className={
                        clicked === 2
                          ? "d-flex flex-column pt-0 gap-4"
                          : "d-flex flex-column gap-4 d-none"
                      }
                      onClick={() => setClicked(1)}
                    >
                      <p>
                        Embrace the natural goodness of Aloe Vera with our
                        collection of soothing skincare and hair care products.
                        Pamper your skin with gentle cleansers and rejuvenating
                        masks, while our Aloe Vera-infused shampoos and
                        conditioners provide hydration and vitality to your
                        hair. Discover the holistic benefits of Aloe Vera
                        supplements, promoting digestive health and supporting
                        immune function, and indulge in a renewed sense of
                        well-being. Whether you're starting your day with a
                        refreshing skincare routine or enhancing your overall
                        wellness with Aloe Vera supplements, embrace nature's
                        gift for nourished skin, hair, and vitality.
                      </p>
                    </Col>
                    <div className="dots d-flex align-items-center justify-content-center">
                      <Dot
                        color={clicked === 1 ? "gray" : "lightgray"}
                        onClick={() => setClicked(1)}
                      />
                      <Dot
                        color={clicked === 2 ? "gray" : "lightgray"}
                        onClick={() => setClicked(2)}
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
