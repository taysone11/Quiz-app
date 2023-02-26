import React, { createContext, useEffect, useState } from "react";
import "./styles/App.scss";
import MenuHeader from "./components/mainMenu/Header/MenuHeader";
import MainMenu from "./components/mainMenu/MainMenu";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

export const QiuzContext = createContext(null);

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [showRes, setShowRes] = useState(false);
  const [theme, setTheme] = useState("light");
  const [balance, setBalance] = useState(0);
  const [rank, setRank] = useState(1);
  const [lives, setLives] = useState(1);


  useEffect(() => {
    setBalance(balance => balance + score)
  },[showRes])

  useEffect(() => {
    if (balance >= 8) {
      setRank(2)
    }
  },[balance])

  return (
    <QiuzContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        setShowRes,
        isPlaying,
        setIsPlaying,
        theme,
        setTheme,
        balance,
        setBalance,
        rank,
        setRank,
        lives,
        setLives,
      }}
    >
      <div className="App">
        <div className="border-container">
          <div className="container">
            {isPlaying ? (
              showRes ?  
              (
                <div className="result">
                  <Result />
                </div>
              ) : (
                <Quiz />
              )
            ) : (
              <MainMenu />
            )}
          </div>
        </div>
      </div>
    </QiuzContext.Provider>
  );
}

export default App;
