import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Authentication from "./components/Authentication";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/authentication" element={<Authentication />}></Route>

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
