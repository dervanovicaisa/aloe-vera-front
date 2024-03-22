import { Nav, Navbar, Image } from "react-bootstrap";
import "./header.css";
import Logo from "../assets/aloe-vera-logo.png";
import { Basket2 } from "react-bootstrap-icons";
import { useEffect } from "react";
function Header({ product, setProduct, onProductChange }) {
  const LSProducts = localStorage.getItem("productItem");
  useEffect(() => {
    if (product.length === 0 && LSProducts !== null) {
      const parsedArray = JSON.parse(LSProducts);
      if (parsedArray.length > 0) {
        setProduct(parsedArray);
      }
    }
  }, []);
  return (
    <Navbar className="d-block border-bottom">
      <div className="px-0 px-lg-5 d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/#home">
          <Image
            src={Logo}
            width={60}
            className="m-auto logo-img"
            alt="Aloe vera"
          />
        </Navbar.Brand>
        <Nav className="aloe-vera-links">
          <Nav.Link href="/#home">Home</Nav.Link>
          <Nav.Link href="/#about" className="d-none d-lg-block">
            About
          </Nav.Link>
          <Nav.Link href="/#products">Products</Nav.Link>
          <Nav.Link href="/#about" className="d-block d-lg-none">
            About
          </Nav.Link>
        </Nav>
        <a className="shopping-cart text-decoration-none text-dark" href="cart">
          {product.length > 0 ? (
            <span className="number-of-items">{product.length}</span>
          ) : (
            ""
          )}
          <Basket2 />
        </a>
      </div>
    </Navbar>
  );
}

export default Header;
