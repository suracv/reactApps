import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
