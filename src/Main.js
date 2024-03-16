import About from "./about/About";
import Home from "./home/Home";

function Main({ productsCategories, product, setProduct, onProductChange }) {
  function setProductsOnChange(e) {
    onProductChange(e);
  }
  return (
    <>
      <Home />
      <About
        productsCategories={productsCategories}
        product={product}
        setProduct={setProduct}
        productOnChange={setProductsOnChange}
      />
    </>
  );
}

export default Main;
