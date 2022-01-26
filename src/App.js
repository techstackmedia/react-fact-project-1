import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
