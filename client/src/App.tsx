import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./layout/Navbar";
import AppBar from "./layout/Appbar";
import  { Router } from "./layout/RouterContent";
import { Outlet, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
