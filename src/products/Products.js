import { useEffect } from "react";
import "./products.css";
import { Button, Col, Row } from "react-bootstrap";
import ProductCard from "../assets/card/Card";
import { ArrowUp } from "react-bootstrap-icons";

function Products({
  productCategories,
  isData,
  onProductChange,
  setFilteredProducts,
  filteredProducts,
}) {
  useEffect(() => {
    function changeProduct() {
      const flattenProducts = (productCategories) => {
        return Object.keys(productCategories).flatMap((category) =>
          productCategories[category].map((product) => ({
            ...product,
            category,
          }))
        );
      };
      const flattenedProducts = flattenProducts(productCategories);
      setFilteredProducts(flattenedProducts);
    }

    changeProduct();

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [productCategories, setFilteredProducts]);

  if (!isData) {
    return "Loading...";
  }
  function onScroll() {
    const scrollUp = document.getElementById("scrollUp");
    const footer = document.getElementById("footer");
    if (scrollUp !== null) {
      if (window.scrollY > 200) {
        scrollUp.classList.remove("invisible");
      } else {
        scrollUp.classList.add("invisible");
      }
      if (footer !== null) {
        if (
          window.scrollY >=
          document.documentElement.scrollHeight - footer.offsetHeight - 1000
        ) {
          scrollUp.classList.add("invisible");
        }
      }
    }
  }
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function setProductsOnChange(e) {
    onProductChange(e);
  }
  return (
    <div id="products" className="py-5 w-100 m-auto">
      <div className="inner-product">
        <Row className="align-items-center px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-sm-4 m-sm-auto pb-4 w-100 justify-content-center">
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="text-xxl-center text-xl-center text-lg-center text-md-center text-sm-start pb-5"
          >
            <h1 className="text-dark">Naši proizvodi</h1>
            <div className="pt-4">
              <p className="text-dark mb-0">
                Istražite moć Aloe Vere u njezi kože, kose i wellnessu.
              </p>
              <p className="text-dark mb-0">
                Mazite se umirujućim proizvodima. Oživite kosu. Otkrijte
                zdravstvene benefite.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center w-100 px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-sm-0 m-sm-auto list-of-products">
          {filteredProducts.map((pr, idx) => (
            <Col
              key={idx}
              id={pr.category}
              xxl={3}
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
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
      </div>
      <div
        id="scrollUp"
        className="scroll-up-btn invisible"
        onClick={() => scrollUp()}
      >
        <Button className="btn-circle shadow bg-white border-0">
          <ArrowUp color="black" />
        </Button>
      </div>
    </div>
  );
}

export default Products;
