import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  FormGroup,
  Image,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import "./cart.css";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Archive, Inboxes, Trash } from "react-bootstrap-icons";
import axios from "axios";
function Cart({ product, setProduct }) {
  const LSProducts = localStorage.getItem("productItem");
  const [key, setKey] = useState("shoppingList");
  const [email, setEmail] = useState("");
  const [dataToSend, setDataToSend] = useState();
  useEffect(() => {
    if (product.length === 0 && LSProducts !== null) {
      let parsedArray = JSON.parse(LSProducts);
      parsedArray = parsedArray.map((el) => {
        if (
          !Object.keys(el).includes("quantity") &&
          !Object.keys(el).includes("totalPrice")
        ) {
          return { ...el, quantity: 1, totalPrice: el.price };
        } else {
          return { ...el };
        }
      });
      setProduct(parsedArray);
      caluculateSubTotal();
    }
  }, [product.length, LSProducts, setProduct]);
  function removeItem(id) {
    const removedItems = product.filter((el, idx) => idx !== id);
    setProduct(removedItems);
    localStorage.setItem("productItem", JSON.stringify(removedItems));
    toast.success("Successfully removed item from cart.");
  }
  function caluculateSubTotal() {
    if (product.length > 0) {
      console.log({ product });
      product.map((pr) => {
        const price = parseInt(pr.price.split(" ")[0]);
        const quantity = parseInt(pr.quantity);
        const calc = price * quantity;
        pr.totalPrice = String(calc) + " EUR";
        return pr;
      });
      console.log({ product });
      setProduct([...product]);
      localStorage.setItem("productItem", JSON.stringify(product));
    }
  }

  function onHandleChange(e, idx) {
    const { value } = e.target;
    product[idx].quantity = parseInt(value);
    const price = parseInt(product[idx].price.split(" ")[0]);
    const quantity = parseInt(value);
    console.log({ price, quantity });
    const calc = price * parseInt(value);
    product[idx].totalPrice = String(calc) + " EUR";
    setProduct([...product]);
    localStorage.setItem("productItem", JSON.stringify(product));
  }
  function sendToEmail(e) {
    const data = {
      recipient: email,
      subject: "Ordering List",
      body: JSON.stringify(sendToEmail),
    };

    axios
      .post("/api/sendEmail", data)
      .then((response) => {
        toast.success(
          "E-mail is successfully sent. We will inform you about your status. Thank you for your patience and trust. ",
          { duration: 5000 }
        );
        setEmail("");
        console.log("Email sent successfully");
      })
      .catch((error) => {
        setEmail("");
        console.error("Error sending email:", error);
      });
  }
  function storeOrderList(e, product) {
    setKey("confirm");
    setDataToSend(product);
  }
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
      <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="shoppingList" title="Shopping list">
          {/* Shopping List key */}
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
                      <th className="text-center">Quantity</th>
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
                          <div className="product-title text-wrap">
                            {el.name}
                          </div>
                        </td>
                        <td className="product-price text-center">
                          {el.price}
                        </td>
                        <td className="text-center quantity">
                          <FormGroup className="d-flex justify-content-center">
                            <FormControl
                              type="number"
                              className="w-50"
                              placeholder="qty"
                              min={1}
                              defaultValue={el.quantity}
                              onChange={(e) => onHandleChange(e, idx)}
                            ></FormControl>
                          </FormGroup>
                        </td>
                        <td className="product-line-price text-center">
                          {el.totalPrice}
                        </td>
                        <td className="table-actions text-center">
                          <Button
                            variant="danger"
                            className="remove-product"
                            onClick={() => removeItem(idx)}
                          >
                            <Trash />
                          </Button>
                          {/* <Button
                        className="product-card-btn btn-light checkout mx-2"
                        href={el.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Wallet2 />
                      </Button> */}
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
                    <tr className="pt-5">
                      <td colSpan={5} className="pt-5">
                        <Inboxes size={200} />
                        <p className="pt-3">There is no product!</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </div>
            {/* mobile version */}
            <div className="res-table d-flex flex-column d-lg-none">
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
                          <div className="text-center quantity">
                            <FormGroup className="d-flex form-group">
                              <FormControl
                                type="number"
                                placeholder="qty"
                                min={1}
                                defaultValue={el.quantity}
                                onChange={(e) => onHandleChange(e, idx)}
                              ></FormControl>
                            </FormGroup>
                          </div>

                          <div className="table-actions d-flex justify-content-between flex-row align-items-center text-end">
                            <Card.Text className="mb-0 pb-0">
                              {el.totalPrice}
                            </Card.Text>
                            <Button
                              variant="danger"
                              className="remove-product"
                              onClick={() => removeItem(idx)}
                            >
                              <Trash />
                            </Button>
                            {/* <Button
                          className="product-card-btn btn-light checkout mx-2"
                          href={el.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Wallet2 />
                        </Button> */}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div className="pt-3 d-flex flex-column justify-content-center align-items-center gap-4">
                  <Inboxes size={100} />
                  <p>There is no product!</p>
                </div>
              )}
            </div>
            <Row className="justify-content-end pb-3 px-4">
              <Col lg={2} className="text-end  px-0">
                {" "}
                <Button
                  className="checkout"
                  onClick={(e) => storeOrderList(e, product)}
                >
                  Confirm & Next
                </Button>
              </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="confirm" title="Status of order">
          <div className="cart">
            <Row className="justify-content-end pb-3 px-4 gap-4">
              <Col className="text-center pt-4">
                <h4>Info about ordering list</h4>
              </Col>
              <Col lg={12} className="mx-0 px-0">
                <Row className="flex-column align-items-center justify-content-center">
                  <Col lg={5} className="text-center">
                    <Archive size={130} />
                  </Col>
                  <Col lg={6} className="text-center pt-3">
                    <p>
                      Your order list will be sent at{" "}
                      <a
                        className="text-dark"
                        href="mailto:valdetahadzajlic@gmail.com"
                      >
                        valdetahadzajlic@gmail.com
                      </a>
                      .<br /> You will be informed about the status of your
                      order via email. <br />
                      Please enter <b> your email </b> address below.
                      <br />
                    </p>
                  </Col>
                  <Col lg={6}>
                    <FormGroup className="pb-3 pt-1">
                      <FormControl
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </FormGroup>
                    <small className="text-muted small">
                      For any questions, feel free to contact us at{" "}
                      <a
                        className="text-dark"
                        href="mailto:valdetahadzajlic@gmail.com"
                      >
                        valdetahadzajlic@gmail.com
                      </a>{" "}
                      or through social media channels.
                    </small>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} className="justify-content-end d-flex  px-0">
                <Button
                  className="checkout mx-2"
                  onClick={() => setKey("shoppingList")}
                >
                  Prev
                </Button>
                <Button
                  className="checkout"
                  disabled={email === ""}
                  onClick={(e) => sendToEmail(e)}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Cart;
