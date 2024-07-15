import About from "./about/About";
import Home from "./home/Home";
import PopularProducts from "./products/popular-products/PopularProducts";

function Main({ productsCategories, product, setProduct, onProductChange }) {
  function setProductsOnChange(e) {
    onProductChange(e);
  }
  return (
    <div>
      <Home />
     <PopularProducts
       productsCategories={productsCategories}
        product={product}
        setProduct={setProduct}
        productOnChange={setProductsOnChange}
      />
      <About />
    </div>
  );
}

export default Main;
