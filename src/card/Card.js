import { CartPlus } from "react-bootstrap-icons";
import "./card.css";
import { Button, Card } from "react-bootstrap";
function ProductCard({ src, title, description }) {
  return (
    <Card className="product-card p-3">
      <Card.Img
        variant="top"
        src={src}
        className="img-responsive product-image"
      />
      <Card.Body className="product-body px-0 mt-4 d-flex border-top flex-column justify-content-between">
        <div className="inner">
          <Card.Title className="product-title pb-0 mb-0">{title}</Card.Title>
          <Card.Text className="product-text pb-0 mb-0">
            {description}
          </Card.Text>
        </div>
        <Button className="circle-icon product-btn m-auto">
          <CartPlus />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
