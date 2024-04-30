"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/app/Ui/ticket/home.module'

const Ticketpage = () => {
    const router = useRouter();
    const { header } = router.query;

  return (
    <div className={styles.container}>
        <h1>{header}</h1>
    </div>
  )
}

export default Ticketpage