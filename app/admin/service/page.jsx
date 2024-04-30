import React from "react";
import styles from "@/app/Ui/admin/service/service.module.css";
import Search from "@/app/Ui/admin/search/search";
import Link from "next/link";
import { FaCog, FaPlus, FaTrash } from "react-icons/fa";

const Servicepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a service..." />
        <Link href="/admin/user/add">
          <button className={styles.addButton}>
            <FaPlus />
          </button>
        </Link>
      </div>
      <div className={styles.service}>
        <div className={styles.serviceDetail}>
          <span className={styles.serviceTitle}>Deposit</span>
          <span className={styles.serviceDesc}>The halmark of commercial banks is the ability to make deposits<br /> whether you're making an individual or commercial transaction</span>
        </div>
        <div className={styles.buttons}>
          <div className={styles.modifycon}>
            <FaCog />
            <Link href="/" className={`${styles.button} ${styles.modify}`}>
              Modify
            </Link>
          </div>
          <div className={styles.del}>
            <FaTrash />
            <p className={`${styles.button} ${styles.delete}`}>
              Remove service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicepage;
