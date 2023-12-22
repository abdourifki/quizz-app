import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../BackQuizz/BackQuizz.css";
const BackEndQuizz = () => {
  const questionsData = [
    {
      id: 1,
      questionText: "Qu'est-ce que Node.js?",
      options: [
        "Un framework JS",
        "Un serveur JavaScript",
        "Une base de données",
      ],
      correctAnswer: "Un serveur JavaScript",
    },
    {
      id: 2,
      questionText: "Quelle base de données est souvent associée à Node.js?",
      options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
      correctAnswer: "MongoDB",
    },
    {
      id: 3,
      questionText:
        "Quel est le principal avantage de lutilisation dExpress.js avec Node.js?",
      options: [
        "Gestion des bases de données",
        "Création de linterface utilisateur",
        "Construction de serveurs web",
        "Validation de formulaires",
      ],
      correctAnswer: "Construction de serveurs web",
    },
    {
      id: 4,
      questionText:
        "Quelle méthode est utilisée pour gérer les requêtes POST dans Express.js?",
      options: ["app.post()", "app.get()", "app.update()", "app.delete()"],
      correctAnswer: "app.post()",
    },
    {
      id: 5,
      questionText: "Quelle fonctionnalité nest pas native dans Node.js?",
      options: [
        "Gestion des fichiers",
        "Gestion des événements",
        "Traitement asynchrone",
        "Manipulation du DOM",
      ],
      correctAnswer: "Manipulation du DOM",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questionsData.length).fill([])
  );
  const [showResult, setShowResult] = useState(false);
  let [timer, setTimer] = useState(60);
  const Navigate = useNavigate();

  const handleAnswerClick = (selectedOption) => {
    const newAnswers = [...userAnswers];
    const currentAnswers = newAnswers[currentQuestion];

    if (currentAnswers.includes(selectedOption)) {
      // Si l'option est déjà sélectionnée, la retirer
      const updatedAnswers = currentAnswers.filter(
        (option) => option !== selectedOption
      );
      newAnswers[currentQuestion] = updatedAnswers;
    } else {
      // Si l'option n'est pas sélectionnée, l'ajouter
      newAnswers[currentQuestion] = [...currentAnswers, selectedOption];
    }

    setUserAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const closeResult = () => {
    setShowResult(false);
    Navigate("/");
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      const correctAnswer = questionsData[index].correctAnswer;
      if (userAnswer.length === 1 && userAnswer[0] === correctAnswer) {
        score++;
      }
    });
    return score;
  };
  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((timer -= 1));
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timer]);

  return (
    <div id="quiz-container">
      {/* {timer==60 ? "1:00":`00:${timer}`} */}
      {showResult ? (
        
          <div className="result-card">
            <button type="button" className="dismiss" onClick={closeResult}>
              ×
            </button>
            <div className="header">
              <div className="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="#000000"
                      d="M20 7L9.00004 18L3.99994 13"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="content">
                <span className="title">Order validated</span>
                <p className="message">
                  Vous avez obtenu {calculateScore()} sur {questionsData.length}
                  .
                </p>
              </div>
            </div>
          </div>
        
      ) : (
        <div className="question-container">
          <div className="timer-container">
            {timer == 60 ? "1:00" : `00:${timer}`}
          </div>
          <div className="question">
            <h2>{questionsData[currentQuestion].questionText}</h2>
            <ul>
              {questionsData[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    value={option}
                    onChange={() => handleAnswerClick(option)}
                    checked={(userAnswers[currentQuestion] || []).includes(
                      option
                    )}
                    id={index}
                  />

                  <label htmlFor={index}>{option}</label>
                </li>
              ))}
            </ul>
            <button onClick={handleNextClick} className="quiz-btn">
              {currentQuestion === questionsData.length - 1
                ? "Soumettre"
                : "Suivant"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackEndQuizz;
