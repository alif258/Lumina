import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Beautifully from "./components/Beautifully";
import Bags from "./components/Bags";
import LaptopCart from "./components/LaptopCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Beautifully/>
      <Bags/>
      <LaptopCart/>
    </>
  );
}

export default App;
