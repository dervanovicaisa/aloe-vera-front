import { Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import "./popular.css";
import ProductCard from "../../assets/card/Card";

function PopularProducts({ productsCategories, productOnChange }) {
  function setProductsOnChange(e) {
    productOnChange(e);
  }

  return (
    <div id="products" className="popular-products">
      <Row className="inner-product m-0 pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-5 pt-3 py-xxl-5 py-xl-5 gap-3 justify-content-center flex-column">
        <Col
          xxl={6}
          xl={6}
          lg={9}
          md={11}
          sm={10}
          xs={10}
          className="d-flex align-items-xxl-center align-items-xl-center align-items-lg-center align-items-md-start 
          align-items-sm-start flex-column justify-content-xxl-center justify-content-xl-center 
          justify-content-lg-center justify-content-md-start justify-content-sm-start gap-3 m-xxl-auto 
          m-xl-auto m-lg-auto m-md-4 m-sm-2 text-xxl-center text-xl-center text-lg-center text-md-start text-sm-start pt-3"
        >
          <h1 className="text-dark">Popularno</h1>
          <p className="text-dark">
            Otkrijte najocjenjenije proizvode za njegu kože, kose i wellness
            koji su voljeni širom svijeta. Naša kolekcija uključuje vrhunske
            formule koje su prilagođene za različite tipove kože i specifične
            potrebe, nudeći efikasnost i luksuz u svakom koraku vaše rutine
            njege. Istražite zašto su naši popularni proizvodi postali omiljeni
            izbor među korisnicima širom svijeta.
          </p>
        </Col>
        <Col
          xxl={10}
          xl={10}
          lg={11}
          md={11}
          sm={11}
          xs={11}
          className="d-flex flex-lg-column flex-sm-column-reverse pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-0 pb-sm-0 pt-3 px-2 py-xxl-4 py-xl-4 px-xxl-5 px-xl-5 box-card m-auto"
        >
          <Row className="list-of-pop-products justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-md-start justify-content-sm-start  gap-xxl-3 gap-xl-4 gap-lg-3 gap-md-0 gap-sm-0 gap-xs-0 flex-lg-wrap flex-sm-nowrap overflow-x-auto">
            {productsCategories["foreverFit"].slice(0, 6).map((pr, idx) => (
              <Col
                key={idx}
                xxl={3}
                xl={3}
                lg={4}
                md={5}
                sm={8}
                xs={8}
                className="popular-product-card mx-xxl-0 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-xs-0 px-xxl-auto px-xl-auto px-lg-auto px-md-0 px-sm-0 px-xs-0"
              >
                <ProductCard
                  src={pr.image_url}
                  title={pr.name}
                  description={pr.price}
                  url={pr.url}
                  setProductsOnChange={setProductsOnChange}
                />
              </Col>
            ))}
          </Row>
          <Row
            className="pt-xxl-5 pt-xl-5 pt-lg-5 pt-md-0 pt-sm-0 pb-xxl-0 pb-xl-0 pb-lg-0 pb-md-0 pb-sm-3 align-items-xxl-center justify-content-xxl-center align-items-xl-center justify-content-xl-center align-items-lg-center justify-content-lg-center  align-items-md-end justify-content-md-end  
          align-items-sm-end justify-content-sm-end"
          >
            <Col
              lg={12}
              className="text-lg-center text-md-end text-sm-end see-all"
            >
              <a href="/products" className="text-dark p">
                Pogledaj sve <ArrowRightCircleFill className="mx-2 text-dark" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PopularProducts;
