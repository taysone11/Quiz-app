import React, { useContext } from 'react'
import styles from "./ProgressBar.module.scss"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import IconButton from '@mui/material/IconButton';
import vars from "/VSCODE APPS/react/quiz/src/styles/_vars.scss"
import quiz from "/VSCODE APPS/react/quiz/src/data/quiz/quiz.json"
import { QiuzContext } from '../../../../App';
const ProgressBar = () => {
  const {currentQuestion} = useContext(QiuzContext)
  

  return (
    <div className={styles.container} >
        <div className={styles.bar} style={{width: +  ((currentQuestion ) / quiz.length) * 100 + '%'}}>
              <AccessAlarmIcon className={styles.icon}/>
        </div>
        
    </div>
  )
}

export default ProgressBar