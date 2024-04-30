import React from 'react'
import styles from '@/app/Ui/ticket/ticket.module.css'
import Navbar from '../Ui/admin/navbar/navbar'
import Sidebar from '../Ui/security/sidebar/sidebar'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout