import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <HomeScreen />
      </BrowserRouter>
    </>
  );
}

export default App;
