import { useEffect, useState } from "react";
import "./products.css";
import {
  Button,
  Col,
  Dropdown,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import ProductCard from "../assets/card/Card";
import { ArrowUp, Funnel, X } from "react-bootstrap-icons";

function Products({
  productCategories,
  isData,
  product,
  setProduct,
  onProductChange,
}) {
  const [item, setItem] = useState("");
  const [flattenedProducts, setFlattenedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(flattenedProducts);
  const [searchQuery, setSearchQuery] = useState("");
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
      setFlattenedProducts(flattenedProducts);
      setFilteredProducts(flattenedProducts);
    }

    changeProduct();

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [productCategories]);

  useEffect(() => {
    const filtered = flattenedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, flattenedProducts]);

  if (!isData) {
    return "Loading...";
  }
  function onClickSetCategory(category) {
    setItem(category);
  }
  function onScroll() {
    const id = document.getElementById("filterBox");
    const scrollUp = document.getElementById("scrollUp");
    const footer = document.getElementById("footer");
    if (id !== null && scrollUp !== null) {
      if (window.scrollY > 200) {
        id.classList.add("on-scroll-box");
        scrollUp.classList.remove("invisible");
      } else {
        id.classList.remove("on-scroll-box");
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
  function onSearch(e) {
    setSearchQuery(e.target.value);
  }
  function removeUppercase(text) {
    let result = "";
    for (let char of text) {
      if (char === char.toUpperCase()) {
        result += " " + char;
      } else {
        result += char;
      }
    }
    return result;
  }

  const handleRemoveItem = () => {
    setItem("");
    scrollUp();
  };
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
        <Col lg={12} className="pb-3 pt-5 px-0" id="filterBox">
          <Row
            className={
              item
                ? "search align-items-center pe-3"
                : "search align-items-center"
            }
          >
            <Col lg={3} className="col">
              <FormGroup>
                <FormControl
                  type="text"
                  className="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={onSearch}
                ></FormControl>
              </FormGroup>
            </Col>
            <Col
              lg={6}
              sm={item ? 12 : 6}
              className={
                item ? "text-left pt-lg-0 pt-2 ps-lg-0" : "px-0 text-left"
              }
            >
              <Dropdown
                className={"dropdown-menu-products d-flex align-items-center"}
              >
                <Dropdown.Toggle
                  className="products-toggle text-dark text-lowercase"
                  id="productsToggle"
                >
                  {item ? (
                    <span>{removeUppercase(item)}</span>
                  ) : (
                    <Funnel className="filter-icon" />
                  )}
                </Dropdown.Toggle>
                {item && (
                  <X
                    id="removeBtn"
                    className="text-dark undo-icon ms-2 cursor-pointer"
                    onClick={() => handleRemoveItem()}
                  />
                )}
                <Dropdown.Menu>
                  {Object.keys(productCategories).map((category) => (
                    <Dropdown.Item
                      key={category}
                      href={"#" + category}
                      className="text-uppercase"
                      onClick={() => onClickSetCategory(category)}
                    >
                      {removeUppercase(category)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mx-0 category-box gap-3 gap-lg-0 justify-content-center">
        {filteredProducts.map((pr, idx) => (
          <div className="product-col" key={idx} id={pr.category}>
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
