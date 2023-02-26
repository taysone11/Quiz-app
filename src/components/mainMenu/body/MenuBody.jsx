import { stepLabelClasses } from "@mui/material";
import React, { useContext } from "react";
import { QiuzContext } from "../../../App";
import MenuButton from "../../UI/Mbutton/MenuButton";
import styles from "./MenuBody.module.scss";
import img from "/VSCODE APPS/react/quiz/src/data/images/ava2.png";




const MenuBody= () => {

  const {setIsPlaying,balance,rank,lives} = useContext(QiuzContext)
  
  return (
    <div className={styles.menu}>
        <span className={styles.greet_span}>Welcome</span>
      <div className={styles.board}>
        
        <div className={styles.img_container}>
          <img src={img} alt="" className={styles.img} />
        </div>
        <span>Taysone</span>
        <table >
          <thead>
            <tr>
              <th>Balance</th>
              <th>Rank</th>
              <th>Lives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{balance}</td>
              <td>{rank}</td>
              <td>{lives}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <MenuButton disabled={lives === 0?"true":""} className={styles.button} onClick={() => setIsPlaying(true)}>Play Quiz</MenuButton>
    </div>
  );
};

export default MenuBody;
