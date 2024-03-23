import { useEffect, useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Products from "./products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Footer from "./footer/Footer";
import Loader from "./assets/loader/Loader";
import Cart from "./cart/Cart";
import { Toaster } from "react-hot-toast";
function App() {
  const [productsCategories, setProductCategories] = useState([]);
  const [isData, setIsData] = useState(false);
  const [product, setProduct] = useState([]);
  const getProductsList = () => {
    fetch(
      "https://raw.githubusercontent.com/dervanovicaisa/data/main/data.json"
    )
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
      })
      .catch((error) => {
        setIsData(false);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (productsCategories.length === 0) {
      getProductsList();
    }
  }, [productsCategories.length]);
  function onProductChange(e) {
    setProduct(e);
    localStorage.setItem("productItem", JSON.stringify(product));
  }
  if (!isData) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="App">
      <Header
        product={product}
        setProduct={setProduct}
        onProductChange={onProductChange}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Main
                  productsCategories={productsCategories}
                  product={product}
                  setProduct={setProduct}
                  onProductChange={onProductChange}
                />
              }
            ></Route>
            <Route
              path="/products"
              element={
                <Products
                  productCategories={productsCategories}
                  setProductCategories={setProductCategories}
                  isData={isData}
                  product={product}
                  setProduct={setProduct}
                  onProductChange={onProductChange}
                />
              }
            ></Route>
            <Route
              path="/cart"
              element={<Cart product={product} setProduct={setProduct} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
