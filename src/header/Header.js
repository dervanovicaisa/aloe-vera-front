import { Nav, Navbar, Image, Dropdown } from "react-bootstrap";
import "./header.css";
import Logo from "../assets/aloe-vera-logo.png";
import { Basket2 } from "react-bootstrap-icons";
function Header({ productsCategories }) {
  return (
    <Navbar className="d-block border-bottom">
      <div className="px-5 d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex flex-column">
          <Image src={Logo} width={60} className="m-auto" alt="Aloe vera" />
        </Navbar.Brand>
        <Nav className="aloe-vera-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Dropdown className="dropdown-menu-products">
            <Dropdown.Toggle className="products-toggle">
              <Nav.Link>Products</Nav.Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(productsCategories).map((category) => (
                <Dropdown.Item href={"#" + category}>{category}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
        </Nav>
        <div className="shopping-cart">
          <Basket2 />
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
