import React from 'react'
import styles from "./MenuButton.module.scss"


const MenuButton= ({children,...props}) => {
  return (
    <button  {...props} className={styles.button}>{children}</button>
  )
}

export default MenuButton