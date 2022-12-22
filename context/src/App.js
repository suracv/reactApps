import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./contextt/ThemeContext";
import Button from "./components/Button";
import Container from "./components/Container";
import { UserProvider } from "./contextt/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider />
      <Container />
    </ThemeProvider>
  );
}

export default App;
