import React from "react";
import Image from "next/image";
import MenuLink from "./menulink/menuLink";
import styles from "./sidebar.module.css";
import { MdLogout } from "react-icons/md";

const menuItems = [
  {
    list: [
      {
        title: "User management",
        path: "/admin/user",
      },
      {
        title: "Service management",
        path: "/admin/service",
      },
      {
        title: "Desk management",
        path: "/admin/desk",
      },
    ],
  },
];

const Sidebar = async () => {
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
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};


export default Sidebar;
