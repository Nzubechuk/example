"use client";

import React from 'react'
import styles from "@/app/Ui/security/home/home.module.css"
import Link from 'next/link';

const Securitypage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.services}>
            <h3 className={styles.header}>Deposit</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Deposit">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
        <div className={styles.services}>
            <h3 className={styles.header}>Withdrawal</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Withdrawal">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
        <div className={styles.services}>
            <h3 className={styles.header}>Loan</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Loan">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
        <div className={styles.services}>
            <h3 className={styles.header}>Cheque</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Cheque">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
        <div className={styles.services}>
            <h3 className={styles.header}>Transfer</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Transfer">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
        <div className={styles.services}>
            <h3 className={styles.header}>Bulk deposit</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Bulk deposit">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
        <div className={styles.services}>
            <h3 className={styles.header}>Customer service</h3>
            <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum dolores dolor voluptatum beatae ut nobis voluptates? Adipisci harum ab, optio dolor, minus, in sed vitae facere fugit nobis quibusdam.</p>
            <Link href="/Ticketpage?header=Customer service">
            <button className={styles.button}>Print</button>
            </Link>
        </div>
    </div>
  )
}

export default Securitypage