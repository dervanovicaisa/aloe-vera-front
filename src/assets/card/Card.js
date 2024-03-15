import { Cart } from "react-bootstrap-icons";
import "./card.css";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
function ProductCard({ src, title, description, product, setProduct }) {
  function saveItem() {
    product.push({ name: title, image_url: src, price: description });
    setProduct(product);
    toast.success("Successfully item added to cart");
  }
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={src} className="product-card-img" />
      <Card.Body className="product-card-body">
        <Card.Title>{title}</Card.Title>
        <div className="d-flex align-items-center justify-content-between">
          <Card.Text className="mb-0 pb-0">Price: {description}</Card.Text>
          <Button
            className="product-card-btn btn-light"
            onClick={() => saveItem()}
          >
            <Cart />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
