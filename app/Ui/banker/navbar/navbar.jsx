import React from "react";
import styles from './navbar.module.css'
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>QEase</div>
    </div>
  );
};

export default Navbar;
