import About from "./about/About";
import Home from "./home/Home";

function Main({ productsCategories, product, setProduct }) {
  return (
    <>
      <Home />
      <About
        productsCategories={productsCategories}
        product={product}
        setProduct={setProduct}
      />
    </>
  );
}

export default Main;
