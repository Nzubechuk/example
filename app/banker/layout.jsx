import Navbar from "../Ui/banker/navbar/navbar"
import Sidebar from "../Ui/banker/sidebar/sidebar"
import styles from "../Ui/banker/banker.module.css"


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