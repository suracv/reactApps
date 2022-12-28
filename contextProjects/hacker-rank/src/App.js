import Buttons from "./components/Buttons";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import { AppContext } from "./context/context";

function App() {
  return (
    <>
      <SearchForm />

      <Buttons />
      <Stories />
    </>
  );
}

export default App;
