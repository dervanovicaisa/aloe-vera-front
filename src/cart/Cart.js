import { Button, Col, Container, Image, Form, Row } from "react-bootstrap";
import "./cart.css";
import toast from "react-hot-toast";
import { useEffect } from "react";
function Cart({ product, setProduct }) {
  const LSProducts = localStorage.getItem("productItem");
  useEffect(() => {
    if (product.length === 0 && LSProducts !== null) {
      let parsedArray = JSON.parse(LSProducts);
      parsedArray = parsedArray.map((el) => {
        if (!Object.keys(el).includes("quantity")) {
          return { ...el, quantity: 1 };
        } else {
          return { ...el };
        }
      });
      setProduct(parsedArray);
    }
  }, []);
  function removeItem(id) {
    const removedItems = product.filter((el, idx) => idx !== id);
    setProduct(removedItems);
    localStorage.setItem("productItem", JSON.stringify(removedItems));
    toast.success("Successfully removed item from cart.");
  }
  function caluculateSubTotal() {
    return product.reduce((acc, product) => {
      return (
        acc + parseInt(product.price.split(" ")[0]) * parseInt(product.quantity)
      );
    }, 0);
  }
  function onHandleChange(e, idx) {
    const { value, name } = e.target;
    product[idx].quantity = parseInt(value);
    setProduct(product);
    localStorage.setItem("productItem", JSON.stringify(product));
  }
  return (
    <Container>
      <Row className="py-5">
        <Col className="text-center">
          <h3 className="popular-title text-dark">Shopping Cart</h3>
          <p className="popular-text text-dark m-auto mt-2">
            Shop now and experience the natural goodness of Aloe Vera in every
            product.
          </p>
        </Col>
        <Col lg={12} className="pt-5">
          <div className="shopping-cart-list flex-column">
            <Row className="column-labels pb-3">
              <Col className="product-image">Image</Col>
              <Col className="product-details">Product</Col>
              <Col className="product-price">Price</Col>
              <Col className="product-quantity">Quantity</Col>
              <Col className="product-removal">Remove</Col>
              <Col className="product-line-price">Total</Col>
            </Row>

            {product.map((el, idx) => {
              return (
                <div className="product" key={idx}>
                  <Row>
                    <Col className="product-image">
                      <Image src={el.image_url} fluid />
                    </Col>
                    <Col className="product-details">
                      <div className="product-title">{el.name}</div>
                    </Col>
                    <Col className="product-price">{el.price}</Col>
                    <Col className="product-quantity">
                      <Form.Control
                        type="number"
                        min="1"
                        defaultValue={el.quantity}
                        onChange={(e) => onHandleChange(e, idx)}
                      />
                    </Col>
                    <Col className="product-removal">
                      <Button
                        variant="danger"
                        className="remove-product"
                        onClick={() => removeItem(idx)}
                      >
                        Remove
                      </Button>
                    </Col>
                    <Col className="product-line-price">{el.price}</Col>
                  </Row>
                </div>
              );
            })}
            <div className="totals">
              <Row className="totals-item">
                <Col>
                  <label>Subtotal</label>
                </Col>
                <Col>
                  <div id="cart-subtotal" className="totals-value">
                    {caluculateSubTotal()} EUR
                  </div>
                </Col>
              </Row>
              {/* <Row className="totals-item">
                <Col>
                  <label>Shipping</label>
                </Col>
                <Col>
                  <div id="cart-shipping" className="totals-value">
                    1 EUR
                  </div>
                </Col>
              </Row> */}
              <Row className="totals-item totals-item-total">
                <Col>
                  <label>Grand Total</label>
                </Col>
                <Col>
                  <div id="cart-total" className="totals-value">
                    {caluculateSubTotal()} EUR
                  </div>
                </Col>
              </Row>
            </div>

            <Button className="checkout">Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
