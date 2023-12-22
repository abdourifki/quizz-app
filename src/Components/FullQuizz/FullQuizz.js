import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../FullQuizz/FullQuizz.css";

const FullQuizz = () => {
  const questionsData = [
    {
      id: 1,
      questionText: "Quest-ce que MERN stack?",
      options: [
        "MongoDB, Express.js, React, Node.js",
        "MySQL, Express.js, React, Node.js",
        "MongoDB, Ember.js, React, Node.js",
        "MongoDB, Express.js, Angular, Node.js",
      ],
      correctAnswer: "MongoDB, Express.js, React, Node.js",
    },
    {
      id: 2,
      questionText:
        "Quel est l'avantage de l'utilisation d'une architecture fullstack?",
      options: [
        "Meilleure performance",
        "Meilleure sécurité",
        "Meilleure séparation des préoccupations",
        "Meilleure gestion des bases de données",
      ],
      correctAnswer: "Meilleure séparation des préoccupations",
    },
    {
      id: 3,
      questionText:
        "Quel est le rôle principal de Redux dans une application React?",
      options: [
        "Gestion de l'état global",
        "Gestion des routes",
        "Gestion des composants",
        "Gestion des requêtes HTTP",
      ],
      correctAnswer: "Gestion de l'état global",
    },
    {
      id: 4,
      questionText:
        "Quelle est la principale responsabilité d'un backend dans une application fullstack?",
      options: [
        "Affichage des données",
        "Gestion de l'interface utilisateur",
        "Traitement des requêtes HTTP",
        "Validation des formulaires",
      ],
      correctAnswer: "Traitement des requêtes HTTP",
    },
    {
      id: 5,
      questionText:
        "Quelle est la principale responsabilité d'un frontend dans une application fullstack?",
      options: [
        "Stockage des données",
        "Interaction avec la base de données",
        "Affichage de l'interface utilisateur",
        "Gestion des routes",
      ],
      correctAnswer: "Affichage de l'interface utilisateur",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questionsData.length).fill([])
  );
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

  const Navigate= useNavigate();
    

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

export default FullQuizz;
