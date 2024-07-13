import "./about.css";
import CradImage from "../assets/cover-img.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill, Dot } from "react-bootstrap-icons";
import ProductCard from "../assets/card/Card";
import { useState } from "react";
function About({ productsCategories, product, setProduct, productOnChange }) {
  const [clicked, setClicked] = useState(1);
  function setProductsOnChange(e) {
    productOnChange(e);
  }
  return (
    <div
      id="about"
      className="border-bottom d-flex flex-column align-items-center"
    >
      <Row
        id="about-row"
        className="px-lg-5 px-2 pt-5 pb-3 py-lg-5 m-0 gap-lg-3"
      >
        <Col lg={12} className="d-flex d-lg-none pb-4 pb-lg-0 text-center">
          <h4>
            We create skincare using the nest ingredients from aloe vera plants.
          </h4>
        </Col>
        <Col lg={4} className="col d-none d-lg-block">
          <Card className=" box-shadow-img border-0">
            <Card.Img src={CradImage}></Card.Img>
          </Card>
        </Col>
        <Col className="col d-flex flex-column gap-2 gap-lg-5 px-lg-4  justify-content-center">
          <Row className="d-none d-lg-flex">
            <Col lg={9}>
              <h4 className="fs-2">
                We create skincare using the nest ingredients from aloe vera
                plants.
              </h4>
            </Col>
          </Row>
          <Row className="d-none d-lg-flex">
            <Col className="col">
              <p className="text-justify">
                Experience the revitalizing touch of Aloe Vera with our
                thoughtfully curated selection of skincare and wellness
                essentials. From gentle cleansers to deeply nourishing creams,
                our comprehensive Aloe Vera skincare range ensures hydration and
                restores balance for radiant, healthy-looking skin. Elevate your
                hair care ritual with our luxurious Aloe Vera-infused shampoos
                and conditioners, leaving your locks irresistibly soft,
                lustrous, and beautifully moisturized. Discover the myriad
                natural benefits of Aloe Vera and embark on a holistic journey
                of self-care, embracing the daily beauty of healthier skin and
                hair with every use.
              </p>
              <p className="text-justify">
                Embrace the natural goodness of Aloe Vera with our collection of
                soothing skincare and hair care products. Pamper your skin with
                gentle cleansers and rejuvenating masks, while our Aloe
                Vera-infused shampoos and conditioners provide hydration and
                vitality to your hair. Discover the holistic benefits of Aloe
                Vera supplements, promoting digestive health and supporting
                immune function, and indulge in a renewed sense of well-being.
                Whether you're starting your day with a refreshing skincare
                routine or enhancing your overall wellness with Aloe Vera
                supplements, embrace nature's gift for nourished skin, hair, and
                vitality.
              </p>
            </Col>
          </Row>
          {/* mobile version */}
          <Row className="d-flex d-lg-none gap-2 gap-lg-5">
            <Col
              lg={5}
              className={
                clicked === 1
                  ? "col flex-column d-flex pt-lg-0 gap-2 gap-lg-4"
                  : "col flex-column gap-4 d-none"
              }
              onClick={() => setClicked(2)}
            >
              <p className="d-block d-lg-none custom-height text-style">
                Experience the revitalizing touch of Aloe Vera with our
                thoughtfully curated selection of skincare and wellness
                essentials. From gentle cleansers to deeply nourishing creams,
                our comprehensive Aloe Vera skincare range ensures hydration and
                restores balance for radiant, healthy-looking skin. Elevate your
                hair care ritual with our luxurious Aloe Vera-infused shampoos
                and conditioners, leaving your locks irresistibly soft,
                lustrous, and beautifully moisturized. Discover the myriad
                natural benefits of Aloe Vera and embark on a holistic journey
                of self-care, embracing the daily beauty of healthier skin and
                hair with every use.
              </p>
            </Col>
            <Col
              lg={5}
              className={
                clicked === 2
                  ? "col flex-column d-flex pt-lg-0 gap-2 gap-lg-4"
                  : "col flex-column gap-4 d-none"
              }
              onClick={() => setClicked(1)}
            >
              <p className="d-block d-lg-none  custom-height text-style">
                Embrace the natural goodness of Aloe Vera with our collection of
                soothing skincare and hair care products. Pamper your skin with
                gentle cleansers and rejuvenating masks, while our Aloe
                Vera-infused shampoos and conditioners provide hydration and
                vitality to your hair. Discover the holistic benefits of Aloe
                Vera supplements, promoting digestive health and supporting
                immune function, and indulge in a renewed sense of well-being.
                Whether you're starting your day with a refreshing skincare
                routine or enhancing your overall wellness with Aloe Vera
                supplements, embrace nature's gift for nourished skin, hair, and
                vitality.
              </p>
            </Col>
            <div className="dots">
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
      <Row
        id="products"
        className="d-none d-lg-flex m-0 pb-5 pt-3 py-lg-5 gap-3 justify-content-center flex-column flower-bg-image"
      >
        <Col lg={12} className="popular-box pt-3">
          <h3 className="popular-title">Popular</h3>
          <p className="popular-text">
            Discover top-rated skincare, haircare, and wellness essentials loved
            globally.
          </p>
        </Col>
        <Col lg={10} className="pb-5 pt-3 py-lg-5 px-2 px-lg-5 box-card m-auto">
          <Row className="mx-0 justify-content-center gap-3">
            {productsCategories["foreverFit"].slice(0, 6).map((pr, idx) => {
              return (
                <Col lg={3} key={idx} className="popular-product-card">
                  <ProductCard
                    src={pr.image_url}
                    title={pr.name}
                    description={pr.price}
                    url={pr.url}
                    product={product}
                    setProduct={setProduct}
                    setProductsOnChange={setProductsOnChange}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col lg={12} className="text-center see-all">
          <a href="products">
            See All{" "}
            <ArrowRightCircleFill className="mx-2"></ArrowRightCircleFill>
          </a>
        </Col>
      </Row>
      {/* mobile version */}
      <Row
        id="products-list"
        className="d-flex d-lg-none m-0 pb-5 pt-3 py-lg-5  gap-3 justify-content-center flex-column flower-bg-image"
      >
        <Col lg={12} className="popular-box pt-3">
          <h3 className="popular-title">Popular</h3>
          <p className="popular-text">
            Discover top-rated skincare, haircare, and wellness essentials loved
            globally.
          </p>
        </Col>
        <Col lg={12} className="py-3 py-lg-5 px-2 px-lg-5 box-card">
          <Row className="mx-0 justify-content-center">
            {productsCategories["foreverFit"].slice(0, 4).map((pr, idx) => {
              return (
                <Col lg={3} key={idx} className="popular-product-card">
                  <ProductCard
                    src={pr.image_url}
                    title={pr.name}
                    description={pr.price}
                    url={pr.url}
                    product={product}
                    setProduct={setProduct}
                    setProductsOnChange={setProductsOnChange}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col lg={12} className="text-center see-all">
          <a href="products">
            See All{" "}
            <ArrowRightCircleFill className="mx-2"></ArrowRightCircleFill>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default About;
