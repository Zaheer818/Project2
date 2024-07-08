import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Testform from "./component/Testform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Testform heading="Enter a text to analyzer" />
      </div>
    </>
  );
}

export default App;
