import { useState } from "react";
import "./App.css";
import About from "./about/About";
import Header from "./header/Header";
import Home from "./home/Home";
import Products from "./products/Products";

function App() {
  const [productsCategories, setProductsCategories] = useState([]);
  return (
    <div className="App">
      <Header productsCategories={productsCategories} />
      <Home />
      <About />
      <Products setProductsCategories={setProductsCategories} />
    </div>
  );
}

export default App;
