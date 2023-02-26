import React from 'react'
import MenuBody from './body/MenuBody'
import MenuHeader from './Header/MenuHeader'
import styles from "./MainMenu.module.scss"

const MainMenu = () => {
  return (
    <div className={styles.main_menu}>
        <MenuHeader/>
        <MenuBody />
    </div>
  )
}

export default MainMenu