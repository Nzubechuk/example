import React from "react";
import styles from "@/app/Ui/admin/desk/desk.module.css";
import Search from "@/app/Ui/admin/search/search";
import Link from "next/link";
import { FaCog, FaPlus, FaTrash } from "react-icons/fa";

const Deskpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a desk..." />
        <Link href="/admin/user/add">
          <button className={styles.addButton}>
            <FaPlus />
          </button>
        </Link>
      </div>
      <h3 className={styles.head}>DESK ID</h3>
      <div className={styles.des}>
        <div className={styles.sub}>
          <h4>Desk 1</h4>
        </div>
        <div className={styles.modifyde}>
          <FaCog />
          <Link href="/">
            <button className={`${styles.button} ${styles.modify}`}>
              Modify
            </button>
          </Link>
        </div>
        <div className={styles.del}>
          <FaTrash />
          <button className={`${styles.button} ${styles.delete}`}>
            Remove user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deskpage;
