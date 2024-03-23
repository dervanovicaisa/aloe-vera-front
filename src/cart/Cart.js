import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import "./cart.css";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Inboxes, Trash, Wallet2 } from "react-bootstrap-icons";
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
  }, [product.length, LSProducts, setProduct]);
  function removeItem(id) {
    const removedItems = product.filter((el, idx) => idx !== id);
    setProduct(removedItems);
    localStorage.setItem("productItem", JSON.stringify(removedItems));
    toast.success("Successfully removed item from cart.");
  }
  // function caluculateSubTotal() {
  //   return product.reduce((acc, product) => {
  //     return (
  //       acc + parseInt(product.price.split(" ")[0]) * parseInt(product.quantity)
  //     );
  //   }, 0);
  // }
  // function caluculatePrice(el) {
  //   return parseInt(el.price.split(" ")[0]) * parseInt(el.quantity);
  // }
  // function onHandleChange(e, idx) {
  //   const { value, name } = e.target;
  //   product[idx].quantity = parseInt(value);
  //   setProduct(product);
  //   localStorage.setItem("productItem", JSON.stringify(product));
  // }
  return (
    <Container id="cart-box">
      <Row className="pt-5">
        <Col className="text-center">
          <h3 className="popular-title text-dark">Shopping Cart</h3>
          <p className="popular-text text-dark m-auto mt-2">
            Shop now and experience the natural goodness of Aloe Vera in every
            product.
          </p>
        </Col>
      </Row>
      <div className="cart">
        {/* web version */}
        <div className="res-table d-none d-lg-block">
          {product.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th className="w-25"></th>
                  <th className="text-center">Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {product.map((el, idx) => (
                  <tr key={idx}>
                    <td className="text-center">
                      <Image src={el.image_url} className="product-image" />
                    </td>
                    <td className="text-center">
                      <div className="product-title text-wrap">{el.name}</div>
                    </td>
                    <td className="product-price text-center">{el.price}</td>
                    <td className="product-line-price text-center">
                      {el.price}
                    </td>
                    <td className="table-actions text-center">
                      <Button
                        variant="danger"
                        className="remove-product"
                        onClick={() => removeItem(idx)}
                      >
                        <Trash />
                      </Button>
                      <Button
                        className="product-card-btn btn-light checkout mx-2"
                        href={el.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Wallet2 />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Table className="pt-5">
              <thead>
                <tr>
                  <th className="w-25"></th>
                  <th className="text-center">Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center pt-5 overflow-y-auto">
                <td colSpan={5} className="pt-5">
                  <Inboxes size={200} />
                  <p>There is no product!</p>
                </td>
              </tbody>
            </Table>
          )}
        </div>
        {/* mobile version */}
        <div className="res-table d-flex flex-column gap-2 p-3 d-lg-none">
          {product.length > 0 ? (
            product.map((el, idx) => (
              <div key={idx}>
                <Card>
                  {/* <Card.Header>
                  </Card.Header> */}
                  <Card.Body className="d-flex gap-2 p-0">
                    <Image src={el.image_url} className="product-image" />

                    <div className="w-100 d-flex flex-column justify-content-between p-2">
                      <Card.Title>{el.name}</Card.Title>
                      <Card.Text>{el.price}</Card.Text>

                      <div className="table-actions text-end">
                        <Button
                          variant="danger"
                          className="remove-product"
                          onClick={() => removeItem(idx)}
                        >
                          <Trash />
                        </Button>
                        <Button
                          className="product-card-btn btn-light checkout mx-2"
                          href={el.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Wallet2 />
                        </Button>
                      </div>
                    </div>
                    {/* <td className="text-center">
                    <Image src={el.image_url} className="product-image" />
                  </td>
                  <td className="text-center">
                    <div className="product-title text-wrap">{el.name}</div>
                  </td>
                  <td className="product-price text-center">{el.price}</td>
                  <td className="product-line-price text-center">{el.price}</td> */}
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="pt-3 d-flex flex-column justify-content-center align-items-center gap-4">
              <Inboxes size={150} />
              <p>There is no product!</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Cart;
