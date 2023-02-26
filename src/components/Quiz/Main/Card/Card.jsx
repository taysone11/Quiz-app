import React, { useContext, useState } from 'react'
import Answer from '../../../UI/Answer/Answer'
import styles from "./Card.module.scss"
import img from "/VSCODE APPS/react/quiz/src/data/images/ava2.png"
import quiz from "../../../../data/quiz/quiz.json"
import { QiuzContext } from '../../../../App'


const Card = () => {

  
 
    const context = useContext(QiuzContext)
    function chooseOption(options) {
        if (options.isCorrect) {
          context.setScore(score => score + 1)
        }
        if (context.currentQuestion === quiz.length-1) {
          context.setShowRes(true)
          
        }
        context.setCurrentQuestion(currentQuestion => currentQuestion + 1)
    } 
  return (
    <div className={styles.card}>
        <div className={styles.img_container}>
            <img src={img} alt="" className={styles.img}/>
        </div>
        <div className={styles.question_info}>
            <div className={styles.question_number}>Question <span className={styles.number}>{context.currentQuestion + 1}</span>/<span className={styles.question_length}>{quiz.length}</span></div>
            <h3 className={styles.question}>{quiz[context.currentQuestion].question}</h3>
        </div>
        <div className={styles.answers}>
             {quiz[context.currentQuestion].answersOptions.map(options =>
              <Answer option={options.answer} options={options} func={chooseOption}/>
              )}
                
           
        </div>
    </div>
  )
}

export default Card