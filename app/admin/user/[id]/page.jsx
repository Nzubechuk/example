import React from "react";
import styles from "@/app/Ui/admin/user/modify/modify.module.css";
import Image from "next/image";

const Modifypage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Breezzyy
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Breezzyy" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Breezzyy" />
          <label>Role</label>
          <select name="role" id="role">
            <option value="general">Choose a role</option>
            <option value="admin">Admin</option>
            <option value="banker">Banker</option>
            <option value="security">Security</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Modifypage;
