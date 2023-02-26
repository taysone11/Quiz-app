import React from 'react'
import styles from "./Answer.module.scss"



const Answer =({option,options,func}) => {
  return (
    <div className={styles.answer} onClick={() => func(options)}><span>{option}</span></div>
  )
}

export default Answer