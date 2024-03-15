import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import "./cart.css";
import toast from "react-hot-toast";
function Cart({ product, setProduct }) {
  function removeItem(id) {
    const removedItems = product.filter((el, idx) => idx !== id);
    setProduct(removedItems);
    toast.success("Successfully removed item from cart.");
  }
  return (
    <Container>
      <h1>Shopping Cart</h1>
      {product}
      <ListGroup>
        {product.map((item, idx) => (
          <ListGroup.Item key={idx}>
            <Row>
              <Col xs={3}>
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="cart-item-image"
                />
              </Col>
              <Col xs={6}>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </Col>
              <Col xs={3}>
                <Button variant="danger" onClick={() => removeItem(idx)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Cart;
