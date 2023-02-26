import React from 'react'
import Card from './Card/Card'
import ProgressBar from './ProgressBar/ProgressBar'
import styles from "./MainQuiz.module.scss"
const MainQuiz = () => {

  

  return (
    <div className={styles.main}>
        <ProgressBar/>
        <Card/>
    </div>
  )
}

export default MainQuiz