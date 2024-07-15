import { Nav, Navbar, Image, Col, Row } from "react-bootstrap";
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
    <div>
      <Navbar className="border-bottom d-block">
        <Row className="align-items-center justify-content-between px-3 w-100">
          <Col xxl={4} xl={4} lg={4} md={3} sm={2} xs={2}>
            <Navbar.Brand href="/#home">
              <Image
                src={Logo}
                width={70}
                className="m-auto img-responsive logo-img"
                alt="Aloe vera"
              />
            </Navbar.Brand>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={5} sm={6} xs={6}>
            <Nav className="aloe-vera-links justify-content-end">
              <Nav.Link href="/#home">Home</Nav.Link>
              <Nav.Link href="/#about-row">About</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Item className="d-flex align-items-center">
                <LanguageSwitcher />
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default Header;
