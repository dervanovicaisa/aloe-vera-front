import About from "./about/About";
import Home from "./home/Home";

function Main({ productsCategories }) {
  return (
    <>
      <Home />
      <About productsCategories={productsCategories} />
    </>
  );
}

export default Main;
