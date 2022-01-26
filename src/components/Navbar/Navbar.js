import React from "react";
import logo from "../../logo.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav">
            <div>
              <img src={logo} alt="React Logo" width="40" />
            </div>
            <div>
              <h2>ReactFacts</h2>
            </div>
          </div>
          <div>
            <h3>React Course - Project 1</h3>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
