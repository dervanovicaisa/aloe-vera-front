import { useEffect, useState } from "react";
import "./products.css";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import ProductCard from "../card/Card";
import { ArrowUp, Funnel } from "react-bootstrap-icons";

function Products({ productCategories, isData }) {
  const [item, setItem] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!isData) {
    return "Loading...";
  }
  function onClickSetCategory(category) {
    setItem(category);
  }
  function onScroll() {
    const id = document.getElementById("filterBox");
    const scrollUp = document.getElementById("scrollUp");
    console.log({ scrollY: window.scrollY });
    if (id !== null && scrollUp !== null) {
      if (window.scrollY > 200) {
        id.classList.add("on-scroll-box");
        scrollUp.classList.remove("invisible");
      } else {
        id.classList.remove("on-scroll-box");
        scrollUp.classList.add("invisible");
      }
      if (window.scrollY >= 9100) {
        scrollUp.classList.add("invisible");
      }
    }
  }
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div id="products" className="px-5 py-5 d-flex flex-column gap-4">
      <Row className="mx-0 px-2 align-items-center">
        <Col lg={12} className="popular-box">
          <h3 className="popular-title text-dark">Our Produtcs</h3>
          <p className="popular-text text-dark">
            All of our products are 6500 toxin free, certified organic,
            eco-friendly skin care and non-GMO.
          </p>
        </Col>
      </Row>
      <Row className="mx-5 py-3 align-items-start" id="filterBox">
        <Col lg={3}>
          <input
            type="text"
            className="form-control search"
            placeholder="Search..."
          ></input>
        </Col>
        <Col lg={3}>
          <Dropdown className="dropdown-menu-products">
            <Dropdown.Toggle
              className="products-toggle text-dark text-uppercase"
              id="productsToggle"
            >
              <b>{item ? item : <Funnel />}</b>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(productCategories).map((category) => (
                <Dropdown.Item
                  key={category}
                  href={"#" + category}
                  className="text-uppercase"
                  onClick={() => onClickSetCategory(category)}
                >
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {Object.keys(productCategories).map((category) => (
        <Row
          className="mx-0 justify-content-center category-box"
          key={category}
          id={category}
        >
          {/* <Col lg={12} className="py-3">
            <h4 className="text-uppercase">{category}</h4>
            <p className="popular-text text-start w-50">
              All of our products are 6500 toxin free, certified organic,
              eco-friendly skin care and non-GMO.
            </p>
          </Col> */}
          {productCategories[category].map((product, idx) => (
            <div className="product-col" key={idx}>
              <ProductCard
                src={product.image_url}
                title={product.name}
                description={product.price}
              />
            </div>
          ))}
        </Row>
      ))}
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
