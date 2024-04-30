import React from 'react'
import styles from '@/app/Ui/admin/user/add/addNew.module.css'

const AddUserpage = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder='username' name='username' required />
            <input type="email" placeholder='email' name='email' required />
            <input type="password" placeholder='password' name='password' required />
            <select name="role" id="role">
                <option value="general">Choose a role</option>
                <option value="admin">Admin</option>
                <option value="banker">Banker</option>
                <option value="security">Security</option>
            </select>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddUserpage