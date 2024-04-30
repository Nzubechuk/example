import React from "react";
import styles from './sidebar.module.css'
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Breezzyy</span>
          <span className={styles.userTitle}>Banker</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
