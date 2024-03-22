import { useEffect, useState } from "react";
import "./products.css";
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import ProductCard from "../assets/card/Card";
import { ArrowUp, Funnel } from "react-bootstrap-icons";

function Products({
  productCategories,
  setProductCategories,
  isData,
  product,
  setProduct,
  onProductChange,
}) {
  const [item, setItem] = useState("");
  const [filteredProducts, setFileteredProducts] = useState({});
  const [isFiltered, setIsFiltered] = useState(false);
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
    // console.log({ scrollY: window.scrollY });
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
  function setProductsOnChange(e) {
    onProductChange(e);
  }
  function onSearch(e) {
    const { value } = e.target;
    const filteredProduct = Object.keys(productCategories).reduce(
      (acc, cat) => {
        const filteredProducts = productCategories[cat].filter((el2) =>
          el2.name.toLowerCase().includes(value.toLowerCase())
        );
        if (filteredProducts.length > 0) {
          acc[cat] = filteredProducts;
        }
        return acc;
      },
      {}
    );
    if (Object.keys(filteredProduct).length > 0) {
      setFileteredProducts({ ...filteredProduct });
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }
  return (
    <div id="products" className="px-2 px-md-5 py-5 d-flex flex-column gap-4">
      <Row className="mx-0 px-2 align-items-center justify-content-center">
        <Col lg={12} className="popular-box">
          <h3 className="popular-title text-dark">Our Produtcs</h3>
          <p className="popular-text text-dark w-100 w-lg-50">
            Explore Aloe Vera's power in skincare, haircare, and wellness.
            Pamper with soothing products. Revitalize locks. Discover health
            benefits. Shop now!
          </p>
        </Col>
      </Row>
      <Row className="py-3" id="filterBox">
        <div className="row search">
          {" "}
          <Col lg={3} className="col-search">
            <FormGroup>
              <FormControl
                type="text"
                className="search"
                placeholder="Search..."
                onChange={(e) => onSearch(e)}
              ></FormControl>
            </FormGroup>
          </Col>
          <Col>
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
        </div>
      </Row>
      {Object.keys(isFiltered ? filteredProducts : productCategories).map(
        (category) => (
          <Row
            className="mx-0 category-box gap-lg-4"
            key={category}
            id={category}
          >
            {productCategories[category].map((pr, idx) => (
              <div className="product-col" key={idx}>
                <ProductCard
                  src={pr.image_url}
                  title={pr.name}
                  description={pr.price}
                  url={pr.url}
                  product={product}
                  setProduct={setProduct}
                  setProductsOnChange={setProductsOnChange}
                />
              </div>
            ))}
          </Row>
        )
      )}
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
