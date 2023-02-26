import React, { useContext } from 'react'
import { QiuzContext } from '../../App'
import HeaderQuiz from '../Quiz/Header/HeaderQuiz'
import MenuButton from '../UI/Mbutton/MenuButton'
import styles from "./Result.module.scss"
import img from "/VSCODE APPS/react/quiz/src/data/images/congrat.png"
  const Result = () => {
  const context= useContext(QiuzContext)
  function tryAgain() {
    context.setCurrentQuestion(0)
    context.setScore(0)
    context.setShowRes(false) 
  }
  return (
<div>
  <HeaderQuiz/>
    <div className={styles.result_container}>
      <div className={styles.img_container}><img src={img}/></div>
      <div className={styles.text}>You guessed {context.score}/{context.currentQuestion}</div>
      <button className={styles.button} onClick={tryAgain} >Try again</button>
    </div>
  </div> 
  )
}

export default Result