import "./card.css";
import { Button, Card } from "react-bootstrap";
function ProductCard({ src, title, description }) {
  return (
    <Card className="product-card">
      <Card.Img
        variant="top"
        src={src}
        className="img-responsive product-image w-75 m-auto"
      />
      <Card.Body className="product-body">
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-text">{description}</Card.Text>
        <Button className="main-btn product-btn w-100">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
