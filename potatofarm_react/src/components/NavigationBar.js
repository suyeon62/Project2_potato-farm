import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/playground">Playground</NavLink>
          </li>
          <li>
            <NavLink to="/book">Book</NavLink>
          </li>
          <li>
            <NavLink to="/boxoffice">Boxoffice</NavLink>
          </li>
          <li>
            <NavLink to="/myPage">MyPage</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default NavigationBar;
