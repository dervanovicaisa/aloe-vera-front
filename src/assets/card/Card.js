import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import "./card.css";

function ProductCard({ src, title, description, url }) {
  return (
    <Row className="justify-content-center">
      <Col xxl={12} xl={12} lg={12} className="card px-0">
        <Row>
          <Col xxl={12} xl={12} lg={12}>
            <div className="product-card-img-body">
              <Image
                variant="top"
                src={src}
                width={300}
                className="product-card-img webkit-width-fit"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
        <Row className="p-4 gap-3 product-details-body">
          <Col xxl={12} xl={12} lg={12}>
            <Card.Title>
              <a
                href={url}
                className="text-dark w-100 text-wrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </Card.Title>
          </Col>
          <Col xxl={12} xl={12} lg={12}>
            <Row className="product-details align-items-center justify-content-between">
              <Col>
                <Card.Text className="mb-0 pb-0 d-flex gap-1">
                  {description}
                </Card.Text>
              </Col>
              <Col className="text-end product-card-btn-col">
                <Button
                  className="product-card-btn btn-light"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Cart />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProductCard;
