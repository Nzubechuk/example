import React from "react";
import Navbar from "../Ui/admin/navbar/navbar";
import styles from "@/app/Ui/security/security.module.css";
import Sidebar from "../Ui/security/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
