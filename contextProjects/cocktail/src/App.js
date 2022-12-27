import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";
import { AppProvider } from "./context";
function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
