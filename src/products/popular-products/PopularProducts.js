import { Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import "./popular.css";
import ProductCard from "../../assets/card/Card";

function PopularProducts({
  productsCategories,
  product,
  setProduct,
  productOnChange,
}) {
  function setProductsOnChange(e) {
    productOnChange(e);
  }

  return (
    <div id="products" className="border-bottom popular-products">
      <Row className="m-0 pb-5 pt-3 py-xxl-5 py-xl-5 gap-3 justify-content-center flex-column">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={10}
          xs={10}
          className="d-flex align-items-center flex-column justify-content-center gap-3 m-auto text-center pt-3"
        >
          <h1 className="text-dark">Popular</h1>
          <p className="text-dark">
            Discover top-rated skincare, haircare, and wellness essentials loved
            globally.
          </p>
        </Col>
        <Col
          xxl={10}
          xl={10}
          lg={11}
          md={11}
          sm={11}
          xs={11}
          className="pb-5 pt-3 px-2 py-xxl-4 py-xl-4 px-xxl-5 px-xl-5 box-card m-auto"
        >
          <Row className="list-of-pop-products justify-content-center gap-xxl-3 gap-xl-4 gap-lg-3 gap-md-3 gap-sm-0 gap-xs-0">
            {productsCategories["foreverFit"].slice(0, 6).map((pr, idx) => (
              <Col
                key={idx}
                xxl={3}
                xl={3}
                lg={4}
                md={5}
                sm={10}
                xs={10}
                className="popular-product-card mx-xxl-0 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-3 mx-xs-3"
              >
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
            ))}
          </Row>
          <Row className="pt-5 align-items-center justify-content-center">
            <Col lg={12} className="text-center see-all">
              <a href="/products" className="text-dark h4">
                See All <ArrowRightCircleFill className="mx-2 text-dark" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PopularProducts;
