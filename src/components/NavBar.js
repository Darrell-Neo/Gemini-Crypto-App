import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/historical-data"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Historical Data
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trade"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Trade
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
