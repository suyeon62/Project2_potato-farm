import React, { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div class="navbar">
        <div class="dropdown">
          <div className="menuBar">
            <div className="leftMenu">
              <button class="dropbtn">movie</button>
              <button class="dropbtn">review</button>
              <button class="dropbtn">booking</button>
              <button class="dropbtn">box-office</button>
            </div>
            <div className="rightMenu">
              <button class="dropbtn">My-page</button>
            </div>
          </div>

          <div class="dropdown-content">
            <div class="row">
              <div className="leftMenu-content">
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
              </div>

              <div className="rightMenu-content">
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
      </div>

      <div class="login"></div>
    </>
  );
};

export default Header;
