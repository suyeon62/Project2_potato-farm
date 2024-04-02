import React, { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        potato farm
        <div style={{ marginLeft: "auto" }}>login</div>
      </header>

      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">movie</button>
          <button class="dropbtn">review</button>
          <button class="dropbtn">booking</button>
          <button class="dropbtn">box-office</button>
          <button class="dropbtn">My-page</button>

          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>movie</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>

              <div class="column">
                <h3>review</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>

              <div class="column">
                <h3>booking</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>

              <div class="column">
                <h3>box-office</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>

              <div class="column">
                <h3>My_page</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="login"></div>

      <footer className="footer">@CopyRight</footer>
    </>
  );
};

export default Header;
