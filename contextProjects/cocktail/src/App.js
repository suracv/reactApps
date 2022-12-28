import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
