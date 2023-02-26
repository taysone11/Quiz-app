import React from 'react'
import HeaderQuiz from './Header/HeaderQuiz'
import MainQuiz from './Main/MainQuiz'
import styles from "./Quiz.module.scss"





const Quiz = () => {
  return (
    <div className={styles.quiz}>
        <HeaderQuiz/>
        <MainQuiz/>
    </div>
  )
}

export default Quiz