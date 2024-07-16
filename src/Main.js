import About from "./about/About";
import Home from "./home/Home";
import PopularProducts from "./products/popular-products/PopularProducts";

function Main({ productsCategories, onProductChange }) {
  function setProductsOnChange(e) {
    onProductChange(e);
  }
  return (
    <div>
      <Home />
      <About
        productsCategories={productsCategories}
        productOnChange={setProductsOnChange}
      />
      <PopularProducts
        productsCategories={productsCategories}
        productOnChange={setProductsOnChange}
      />
    </div>
  );
}

export default Main;
