import Navbar from "../Ui/admin/navbar/navbar"
import Sidebar from "../Ui/admin/sidebar/sidebar"
import styles from "../Ui/admin/admin.module.css"


const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout