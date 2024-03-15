import { useEffect, useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Products from "./products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Footer from "./footer/Footer";

function App() {
  const [productsCategories, setProductCategories] = useState([]);
  const [isData, setIsData] = useState(false);

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
  }, []);

  if (!isData) {
    return "Loading...";
  }
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Main productsCategories={productsCategories} />}
            ></Route>
            <Route
              path="products"
              element={
                <Products
                  productCategories={productsCategories}
                  isData={isData}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
