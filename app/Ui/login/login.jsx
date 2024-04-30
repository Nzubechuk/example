"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('/login', {
        username,
        password,
      });

      console.log(response.status);
      // ...

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          QEase<span>.</span>
        </h1>
      </div>
      <div className={styles.sub}>
        <h2>Login</h2>
      </div>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    </div>
  );
};

export default Login;
