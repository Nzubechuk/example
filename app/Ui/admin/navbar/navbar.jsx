"use client"

import React from 'react'
import styles from './nav.module.css'
import { usePathname } from 'next/navigation';
import { MdSearch } from "react-icons/md"

const Navbar = () => {

  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>QEase<span>.</span></div>
    </div>
  )
}

export default Navbar