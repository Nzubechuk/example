import React from 'react'
import styles from '@/app/Ui/login/layout/layout.module.css'
import Navbar from '../Ui/banker/navbar/navbar'
import Login from '../Ui/login/login'

const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Navbar />
            <Login/>
        </div>
        {children}
    </div>
  )
}

export default layout