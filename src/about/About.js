import "./about.css";
import CradImage from "../assets/cover-img.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill, Flower2 } from "react-bootstrap-icons";
import ProductCard from "../assets/card/Card";
function About({ productsCategories, product, setProduct, productOnChange }) {
  function setProductsOnChange(e) {
    productOnChange(e);
  }
  return (
    <div
      id="about"
      className="border-bottom d-flex flex-column-reverse flex-lg-column"
    >
      <Row className="px-5 py-3 pb-5 py-lg-5 m-0">
        <Col lg={5} className="d-none d-lg-block">
          <Card className="w-75 box-shadow-img border-0">
            <Card.Img src={CradImage}></Card.Img>
          </Card>
        </Col>
        <Col className="d-flex flex-column gap-2 gap-lg-5 justify-content-center">
          <Row>
            <Col lg={9}>
              <h4>
                We create skincare using the nest ingredients from aloe vera
                plants.
              </h4>
            </Col>
          </Row>
          <Row className="gap-2 gap-lg-5">
            <Col lg={5} className="d-flex flex-column gap-4">
              <div className="circle-icon fit-content">
                <Flower2 />
              </div>
              <p className="d-none d-lg-block">
                Experience the revitalizing touch of Aloe Vera with our curated
                selection of skincare and wellness essentials. From gentle
                cleansers to nourishing creams, our Aloe Vera skincare range
                offers hydration and balance for radiant skin. Elevate your hair
                care routine with Aloe Vera-infused shampoos and conditioners,
                leaving your locks soft, lustrous, and beautifully moisturized.
              </p>
              <p className="d-block d-lg-none">
                Experience the revitalizing touch of Aloe Vera with our curated
                selection of skincare and wellness essentials. From gentle
                cleansers to nourishing creams, our Aloe Vera skincare range
                offers hydration and balance for radiant skin.
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column gap-4">
              <div className="circle-icon fit-content">
                <Flower2 />
              </div>
              <p className="d-none d-lg-block">
                Embrace the natural goodness of Aloe Vera with our collection of
                soothing skincare and hair care products. Pamper your skin with
                gentle cleansers and rejuvenating masks, while our Aloe
                Vera-infused shampoos and conditioners provide hydration and
                vitality to your hair. Discover the holistic benefits of Aloe
                Vera supplements for digestive health and immune support, and
                indulge in a renewed sense of well-being.
              </p>
              <p className="d-block d-lg-none">
                Embrace the natural goodness of Aloe Vera with our collection of
                soothing skincare and hair care products. Pamper your skin with
                gentle cleansers and rejuvenating masks, while our Aloe
                Vera-infused shampoos and conditioners provide hydration and
                vitality to your hair.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        id="products"
        className="m-0 pb-5 pt-3 py-lg-5 gap-3 justify-content-center flex-column flower-bg-image"
      >
        <Col lg={12} className="popular-box pt-3">
          <h3 className="popular-title">Popular</h3>
          <p className="popular-text">
            Discover top-rated skincare, haircare, and wellness essentials loved
            globally.
          </p>
        </Col>
        <Col lg={12} className="pb-5 pt-3 py-lg-5 px-2 px-lg-5 box-card">
          <Row className="mx-0 justify-content-center">
            {productsCategories["foreverFit"].slice(0, 3).map((pr, idx) => {
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
