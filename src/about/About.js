import "./about.css";
import CradImage from "../assets/cover-img.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill, Flower2 } from "react-bootstrap-icons";
import ProductCard from "../assets/card/Card";
function About({ productsCategories, product, setProduct }) {
  return (
    <div id="about" className="border-bottom">
      <Row className="px-5 py-5 m-0">
        <Col lg={5}>
          <Card className="w-75 box-shadow-img border-0">
            <Card.Img src={CradImage}></Card.Img>
          </Card>
        </Col>
        <Col className="d-flex flex-column gap-5 justify-content-center">
          <Row>
            <Col lg={9}>
              <h4>
                We create skincare using the nest ingredients from aloe vera
                plants.
              </h4>
            </Col>
          </Row>
          <Row className="gap-5">
            <Col lg={5} className="d-flex flex-column gap-4">
              <div className="circle-icon fit-content">
                <Flower2 />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas non orci sit amet lacus malesuada maximus sit amet at
                sem. Quisque quis lectus id ipsum euismod pretium.Quisque quis
                lectus id ipsum euismod pretium.Quisque quis lectus id ipsum
                euismod pretium.Quisque quis lectus id ipsum euismod pretium.
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column gap-4">
              <div className="circle-icon fit-content">
                <Flower2 />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas non orci sit amet lacus malesuada maximus sit amet at
                sem. Quisque quis lectus id ipsum euismod pretium.Quisque quis
                lectus id ipsum euismod pretium. Quisque quis lectus id ipsum
                euismod pretium.Quisque quis lectus id ipsum euismod pretium.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id="products" className="m-0 py-5 gap-3  flower-bg-image">
        <Col lg={12} className="popular-box pt-3">
          <h3 className="popular-title">Popular</h3>
          <p className="popular-text">
            All of our products are 6500 toxin free, certified organic,
            eco-friendly skin care and non-GMO.
          </p>
        </Col>
        <Col lg={12} className="py-5 px-5 box-card">
          <Row className="mx-0 justify-content-center">
            {productsCategories["foreverFit"].slice(0, 3).map((pr, idx) => {
              return (
                <Col lg={3} key={idx} className="popular-product-card">
                  <ProductCard
                    src={pr.image_url}
                    title={pr.name}
                    description={pr.price}
                    product={product}
                    setProduct={setProduct}
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
