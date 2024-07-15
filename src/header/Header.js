import { Nav, Navbar, Image } from "react-bootstrap";
import "./header.css";
import Logo from "../assets/aloe-vera-logo.png";
import { useEffect } from "react";
import LanguageSwitcher from "../assets/google-translate/language-switcher";
function Header({ product, setProduct }) {
  const LSProducts = localStorage.getItem("productItem");
  useEffect(() => {
    if (product.length === 0 && LSProducts !== null) {
      const parsedArray = JSON.parse(LSProducts);
      if (parsedArray.length > 0) {
        setProduct(parsedArray);
      }
    }
  }, [product.length, LSProducts, setProduct]);
  return (
    <Navbar className="d-block border-bottom px-2 px-lg-0">
      <div className="px-0 px-lg-5 d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/#home">
          <Image
            src={Logo}
            width={75}
            className="m-auto logo-img"
            alt="Aloe vera"
          />
        </Navbar.Brand>
        <Nav className="aloe-vera-links">
          <Nav.Link href="/#home">Home</Nav.Link>
          <Nav.Link href="/#about-row">About</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Item className="d-flex align-items-center">
            <LanguageSwitcher />
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;
