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
    <Navbar expand="lg" className="border-bottom px-3">
      <Navbar.Brand href="/">
        {" "}
        <Image
          src={Logo}
          width={70}
          className="m-auto img-responsive logo-img"
          alt="Aloe vera"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center pb-xxl-0 pb-xl-0 pb-lg-0 pb-md-4 pb-sm-4">
          <Nav.Link href="/#home">Home</Nav.Link>
          <Nav.Link href="/#about-row">About</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Item className="d-flex align-items-center">
            <LanguageSwitcher />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
