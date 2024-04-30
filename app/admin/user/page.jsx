import React from "react";
import styles from "@/app/Ui/admin/user/user.module.css";
import Search from "@/app/Ui/admin/search/search";
import { FaCog, FaPlus, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/Ui/admin/pagination/pagination";

const Userpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/admin/user/add">
          <button className={styles.addButton}>
            <FaPlus />
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>Admin</td>
            <td>
              <div className={styles.buttons}>
                <div className={styles.modifyde}>
                  <FaCog />
                  <Link href="/admin/user/test">
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
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Userpage;
