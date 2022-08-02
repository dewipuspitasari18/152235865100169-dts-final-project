import React from "react";
import { NavLink } from "react-router-dom";
import { HiCake } from "react-icons/hi";
import UserLog from "../../containers/UserLog";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const activeStyle = {
    color: "#2592ec;",
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/">
          <HiCake className={styles.logo} />
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/listmakanan"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Makanan
              </NavLink>
            </li>
            <li>
              <UserLog/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
