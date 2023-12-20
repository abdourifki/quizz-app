import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const Navigate= useNavigate();

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
    Navigate("/")
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
  return (
    <div id="quiz-container">
      {showResult ? (
        <div className="result-container">
          <div className="result">
            <h2> Résultat :</h2>
            <p>
              Vous avez obtenu {calculateScore()} sur {questionsData.length}.
            </p>
            <div className="close" onClick={closeResult}>
              <p>X</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="question-container">
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
