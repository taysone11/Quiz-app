import React, { useContext } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import styles from "./HeaderQuiz.module.scss"
import { QiuzContext } from '../../../App';

const HeaderQuiz = () => {
const context = useContext(QiuzContext)
function backToMenu() {
  context.setIsPlaying(false)
  
}
  return (
    <div className={styles.header_quiz}>
        <IconButton className={styles.button} onClick={backToMenu}>
            <ArrowBackIcon/>
        </IconButton>
        <h2>Quiz</h2>
    </div>
  )
}

export default HeaderQuiz