import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Outlet } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
