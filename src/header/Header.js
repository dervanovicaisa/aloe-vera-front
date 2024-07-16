import { Nav, Navbar, Image, NavDropdown, Form } from "react-bootstrap";
import "./header.css";
import Logo from "../assets/aloe-vera-logo.png";
import { useEffect, useState } from "react";
import { removeUppercase } from "../pipes/pipe";
import { useLocation, useNavigate } from "react-router";
function Header({ productsCategories, setFilteredProducts }) {
  const [item, setItem] = useState("");
  const [flattenedProducts, setFlattenedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { hash } = useLocation();
  function onClickSetCategory(category) {
    setItem(category);
    navigate(`/products/#${category}`, { replace: false });
  }
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

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
      const flattenedProducts = flattenProducts(productsCategories);
      setFlattenedProducts(flattenedProducts);
      setFilteredProducts(flattenedProducts);
    }

    changeProduct();
  }, [productsCategories, setFilteredProducts]);

  useEffect(() => {
    const filtered = flattenedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, flattenedProducts, setFilteredProducts]);

  function onSearch(e) {
    setSearchQuery(e.target.value);
  }
  return (
    <Navbar expand="lg" className="border-bottom align-items-center px-3">
      <Navbar.Brand href="/">
        {" "}
        <Image
          src={Logo}
          width={45}
          className="m-auto img-responsive logo-img"
          alt="Aloe vera"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end w-25 align-items-center gap-3"
      >
        <div className="ms-auto d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none">
          <Form>
            <Form.Control
              type="search"
              placeholder="Pretraga"
              className="w-100 search"
              aria-label="Search"
              value={searchQuery}
              onChange={onSearch}
            />
          </Form>
        </div>
        <Nav className="pb-xxl-0 pb-xl-0 pb-lg-0 pb-md-4 pb-sm-0 bg-light rounded">
          <Nav.Link href="/#home">Početna</Nav.Link>
          <Nav.Link href="/#about-row">O Nama</Nav.Link>
          <NavDropdown
            title={item ? removeUppercase(item) : "Proizvodi"}
            id="basic-nav-dropdown"
            className="text-capitalize w-100"
            align={{ lg: "end" }}
          >
            <NavDropdown.Item
              href={"/products"}
              className="text-capitalize"
              onClick={() => onClickSetCategory("Svi proizvodi")}
            >
              Svi proizvodi
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {productsCategories &&
              Object.keys(productsCategories).map((category) => (
                <NavDropdown.Item
                  key={category}
                  className="text-capitalize"
                  onClick={() => onClickSetCategory(category)}
                >
                  {removeUppercase(category)}
                </NavDropdown.Item>
              ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
