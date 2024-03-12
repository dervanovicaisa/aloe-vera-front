import { useEffect, useState } from "react";
import "./products.css";
import { Col, InputGroup, Row } from "react-bootstrap";
import ProductCard from "../card/Card";

function Products({ setProductsCategories }) {
  const [productCategories, setProductCategories] = useState([]);
  const [isData, setIsData] = useState(false);

  const getProductsList = () => {
    fetch("http://jsonblob.com/api/jsonBlob/1216886859333754880")
      .then((res) => {
        if (!res.ok) {
          setIsData(false);
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setIsData(true);
        setProductCategories(data);
        setProductsCategories(data);
      })
      .catch((error) => {
        setIsData(false);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getProductsList();
  }, []);

  if (!isData) {
    return "Loading...";
  }

  return (
    <div id="products" className="px-5">
      <Row className="mx-0 align-items-center">
        <Col>
          <h3 className="text-center py-5">Our Products</h3>
        </Col>
      </Row>
      {Object.keys(productCategories).map((category) => (
        <div key={category} id={category} className="pb-5">
          {/* <h3 className="py-3">{category}</h3> */}
          <Row className="gap-1 justify-content-center mx-0">
            {productCategories[category].map((product, idx) => (
              <Col lg={3} key={idx} className="pb-3">
                <ProductCard
                  src={product.image_url}
                  title={product.name}
                  description={product.price}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Products;
