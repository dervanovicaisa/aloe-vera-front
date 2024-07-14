import { Cart } from "react-bootstrap-icons";
import "./card.css";
import { Button, Card, Image } from "react-bootstrap";
function ProductCard({ src, title, description, url }) {
  // function saveItem() {
  //   product.push({ name: title, image_url: src, price: description, url: url });
  //   setProduct(product);
  //   setProductsOnChange(product);
  //   toast.success("Successfully item added to cart");
  // }
  return (
    <Card className="product-card">
      <div className="product-card-img-container">
        <div className="product-card-img-body">
          <Image
            variant="top"
            src={src}
            className="product-card-img"
            loading="lazy"
          />
        </div>
      </div>
      <Card.Body className="product-card-body">
        <Card.Title>
          <a href={url} className="text-dark">
            {title}
          </a>
        </Card.Title>
        <div className="d-flex align-items-center justify-content-between">
          <Card.Text className="mb-0 pb-0 d-flex gap-1">
            <span className="d-none d-lg-block">Price:</span> {description}
          </Card.Text>
          <Button className="product-card-btn btn-light" href={url}>
            <Cart />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
