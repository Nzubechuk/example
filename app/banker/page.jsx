import React from "react";
import styles from "@/app/Ui/banker/home/home.module.css";
import Search from "../Ui/admin/search/search";
import Link from "next/link";

const Bankerpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a service..." />
        <Link href="/admin/user/add">
          <button className={styles.addButton}>Create</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Services</td>
            <td>DESK ID</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.serviceDetail}>
                <span className={styles.serviceTitle}>Deposit</span>
                <span className={styles.serviceDesc}>
                  The halmark of commercial banks is the ability to make
                  deposits
                  <br /> whether you're making an individual or commercial
                  transaction
                </span>
              </div>
            </td>
            <td>Desk 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bankerpage;
