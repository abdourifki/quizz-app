import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../FrontQuizz/FrontQuizz.css";
const FrontEndQuizz = () => {
  const questionsData = [
    {
      id: 1,
      questionText: "What does CSS stand for?",
      options: [
        "Counter Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
        "Creative Style Sheet",
      ],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      id: 2,
      questionText: "Which HTML tag is used for creating hyperlinks?",
      options: ["<link>", "<url>", "<a>", "<hyperlink>"],
      correctAnswer: "<a>",
    },
    {
      id: 3,
      questionText: "What is the purpose of JavaScript?",
      options: [
        "Styling web pages",
        "Adding interactivity to web pages",
        "Defining page structure",
        "Managing databases",
      ],
      correctAnswer: "Adding interactivity to web pages",
    },
    {
      id: 4,
      questionText:
        "Which of the following is a version control system commonly used in web development?",
      options: ["Git", "Java", "Python", "Ruby"],
      correctAnswer: "Git",
    },
    {
      id: 5,
      questionText: "What is the role of the <head> tag in HTML?",
      options: [
        "It defines the main content of the document",
        "It contains metadata about the document",
        "It represents a navigation menu",
        "It defines a section in a document",
      ],
      correctAnswer: "It contains metadata about the document",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questionsData.length).fill([])
  );
  const [showResult, setShowResult] = useState(false);
  const Navigate = useNavigate();
  let [timer, setTimer] = useState(60);

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

export default FrontEndQuizz;
