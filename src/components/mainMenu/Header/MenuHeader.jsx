import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import IconButton from '@mui/material/IconButton';
import React, { useContext, useEffect, useState } from 'react'
import { QiuzContext } from '../../../App';
import ss from "./Header.module.scss"





const MenuHeader = () => {

  const {theme,setTheme} = useContext(QiuzContext)

function changeTheme() {
  setTheme(theme === 'light'? 'dark':'light')
  
}

useEffect(() => {
  const root = document.querySelector(":root")
  const components = [
'menu-button-color',
'menu-board-color',
'text-color',
'background-img',
'board-text-color',
'board-score-text-color'
  ]
  components.forEach(el => {
    root.style.setProperty(`--${el}-default`,`var(--${el}-${theme})`)
    
  })


},[theme])

  function getS() {
    const root = document.querySelector(":root")
    console.log(root.style);
  }

  return (
    <header className={ss.menuHeader} >
        <IconButton area-label="menu"  onClick={() => getS()}>
            <MenuIcon className={ss.button}/>
        </IconButton>
        <IconButton area-label="settings"  onClick={() => changeTheme()}>
            <SettingsOutlinedIcon className={ss.button}/>
        </IconButton>

    </header>
  )
}

export default MenuHeader