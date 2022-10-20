import "./App.css";
import Container from "./components/Container";
import { createContext, useState } from "react";
export const blockContext = createContext();
function App() {
  const [blocks, setBl] = useState([]);
  const AddBlocks = (newBlock) => {
    setBl((prevState) => [...prevState, newBlock]);
  };
  const updateBlocks = (data) => {
    setBl(data);
  };
  const [src, setSrc] = useState("/placeholder.svg");

  return (
    <blockContext.Provider
      value={{ blocks, AddBlocks, updateBlocks, src, setSrc }}
    >
      <div className="App">
        <Container />
      </div>
    </blockContext.Provider>
  );
}

export default App;
