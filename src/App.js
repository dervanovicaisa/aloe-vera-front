import "./App.css";
import About from "./about/About";
import Header from "./header/Header";
import Home from "./home/Home";
import Products from "./products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Products />
    </div>
  );
}

export default App;
