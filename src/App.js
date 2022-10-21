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
  const [src, setSrc] = useState("./placeholder.svg");
  const [info, setInfo] = useState({
    title: "",
    "f-name": "",
    "l-name": "",
    phone: "",
    email: "",
    address: "",
  });
  return (
    <blockContext.Provider
      value={{ blocks, AddBlocks, updateBlocks, src, setSrc, info, setInfo }}
    >
      <div className="App">
        <Container />
      </div>
    </blockContext.Provider>
  );
}

export default App;
