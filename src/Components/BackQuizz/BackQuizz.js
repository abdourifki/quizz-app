import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const Navigate= useNavigate();
  const [showResult, setShowResult] = useState(false);

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
  const closeResult = () => {
    setShowResult(false);
    Navigate("/")
  };

  const handleNextClick = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
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

export default BackEndQuizz;
