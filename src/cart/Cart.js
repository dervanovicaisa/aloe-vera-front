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
import {
  CaretDownFill,
  CaretRightFill,
  CaretUpFill,
  Check2All,
  Inboxes,
  Trash,
} from "react-bootstrap-icons";
import axios from "axios";
import { generateCartEmail } from "./email-template";
function Cart({ product, setProduct }) {
  const LSProducts = localStorage.getItem("productItem");
  const [key, setKey] = useState("shoppingList");
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    address: "",
    email: "",
  });
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
    }
  }, [LSProducts, setProduct, product.length]);
  function removeItem(id) {
    const removedItems = product.filter((el, idx) => idx !== id);
    setProduct(removedItems);
    localStorage.setItem("productItem", JSON.stringify(removedItems));
    toast.success("Successfully removed item from cart.");
  }

  function onHandleChange(e, idx) {
    let { value } = e.target;
    if (value > 0 || value === "") {
      product[idx].quantity = parseInt(value);
      if (parseInt(value) >= 1 && product[idx].quantity >= 1) {
        const price = parseInt(product[idx].price.split(" ")[0]);
        const calc = price * parseInt(value);
        product[idx].totalPrice = String(calc) + " EUR";
      }
      setProduct([...product]);
      localStorage.setItem("productItem", JSON.stringify(product));
    }
  }
  function sendToEmail(e) {
    const data = {
      recipient: form.email,
      subject: "Ordering List",
      body: generateCartEmail(dataToSend),
    };

    axios
      .post(
        "https://aloe-vera-email-4977989203c2.herokuapp.com/api/sendEmail",
        data
      )
      .then((response) => {
        toast.success(
          "E-mail is successfully sent. We will inform you about your status. Thank you for your patience and trust. ",
          { duration: 5000 }
        );
        setForm({});
        console.log("Email sent successfully");
      })
      .catch((error) => {
        setForm({});
        console.error("Error sending email:", error);
      });
  }
  function storeOrderList(e, product) {
    if (product.some((el) => el.quantity === 0 || isNaN(el.quantity))) {
      toast.error("Quantity of the product cannot be less than one.");
      return -1;
    }
    setKey("confirm");
    setDataToSend(product);
  }
  const storeForm = (e) => {
    let { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Container id="cart-box">
      <Row className="pt-5">
        <Col className="text-center pb-lg-5">
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
                              className="qty"
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
                  <tbody className="text-center pt-5 overflow-y-auto border-bottom-0">
                    <tr className="pt-5 border-bottom-0">
                      <td colSpan={5} className="pt-5 border-bottom-0">
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
                                value={el.quantity}
                                className="px-1"
                                onChange={(e) => onHandleChange(e, idx)}
                              ></FormControl>
                              <div className="ml-1 custom-arrows">
                                <div className="caret-up">
                                  <CaretUpFill
                                    size={5}
                                    onClick={() =>
                                      onHandleChange(
                                        { target: { value: el.quantity + 1 } },
                                        idx
                                      )
                                    }
                                  />
                                </div>
                                <div className="caret-down">
                                  <CaretDownFill
                                    size={5}
                                    onClick={() =>
                                      onHandleChange(
                                        { target: { value: el.quantity - 1 } },
                                        idx
                                      )
                                    }
                                  />
                                </div>
                              </div>
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
                <div className="pt-5 d-flex flex-column justify-content-center align-items-center gap-lg-4 gap-2">
                  <Inboxes size={100} className="inbox-icon" />
                  <p className="text-no-products">There is no product!</p>
                </div>
              )}
            </div>
            {product.length > 0 && (
              <Row className="justify-content-end pb-3 px-4">
                <Col lg={2} className="text-end  px-0">
                  {" "}
                  <Button
                    className="checkout"
                    onClick={(e) => storeOrderList(e, product)}
                  >
                    <span className="d-flex justify-content-between">
                      Confirm & Next <CaretRightFill className="mt-1" />
                    </span>
                  </Button>
                </Col>
              </Row>
            )}
          </div>
        </Tab>
        <Tab
          eventKey="confirm"
          title="Status of order"
          disabled={product.length === 0}
        >
          <div className="cart status-of-order gap-3">
            <Row className="justify-content-center px-4 py-5 gap-lg-4 gap-0">
              <Col lg={5}>
                <Row>
                  <Col lg={12} className="text-center pt-4">
                    <h4>Info about ordering list</h4>
                    <p className="text-center pt-2">
                      Your order list will be sent at{" "}
                      <a
                        className="text-dark"
                        href="mailto:valdetahadzajlic@gmail.com"
                      >
                        aloeveravh@gmail.com
                      </a>
                      .<br /> You will be informed about the status of your
                      order via email.
                    </p>
                  </Col>
                  <Col
                    lg={12}
                    className="text-lg-center pt-lg-3 pt-0 text-justify"
                  >
                    <p>
                      {" "}
                      Please fill out the <b> form</b>.
                    </p>
                  </Col>
                  <Col lg={12}>
                    <FormGroup className="pb-1 pb-lg-3 pt-1">
                      <Row className="gap-3">
                        <Col className="pe-0">
                          <FormControl
                            type="text"
                            name="name"
                            value={form?.name}
                            onChange={(e) => storeForm(e)}
                            placeholder="Enter your name"
                          />
                        </Col>
                        <Col className="ps-0">
                          <FormControl
                            type="text"
                            name="lastName"
                            value={form?.lastName}
                            onChange={(e) => storeForm(e)}
                            placeholder="Enter your last name"
                          />
                        </Col>
                        <Col lg={12}>
                          <FormControl
                            type="email"
                            name="email"
                            value={form?.email}
                            onChange={(e) => storeForm(e)}
                            placeholder="Enter your email"
                          />
                        </Col>
                        <Col lg={12}>
                          <FormControl
                            type="text"
                            value={form?.address}
                            name="address"
                            onChange={(e) => storeForm(e)}
                            placeholder="Enter your address"
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <small className="text-muted small">
                      For any questions, feel free to contact us at{" "}
                      <a
                        className="text-dark"
                        href="mailto:valdetahadzajlic@gmail.com"
                      >
                        aloeveravh@gmail.com
                      </a>{" "}
                      or through social media channels.
                    </small>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center pt-lg-0 py-4">
              <Col lg={5} className="text-end">
                <Button
                  className="checkout prev mx-2 text-center"
                  onClick={() => setKey("shoppingList")}
                >
                  <span>Previous</span>
                </Button>
                <Button
                  className="checkout send"
                  disabled={
                    form?.email === "" &&
                    form?.name === "" &&
                    form?.lastName === "" &&
                    form?.address === ""
                  }
                  onClick={(e) => sendToEmail(e)}
                >
                  <span className="d-flex justify-content-between align-items-center">
                    Send <Check2All />
                  </span>
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
