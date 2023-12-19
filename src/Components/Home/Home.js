import React from "react";
import "../Home/Home.css";
import image from "../../Assets/qcm image.png";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const Navigate= useNavigate();
  const StartQuizz= ()=>{
    Navigate("/Categories")
  }
  return (
    <>
      <div className="home-img-container">
        <div className="image-container">
          <img src={image} alt="image" className="home-image"></img>
          <button onClick={StartQuizz}>
            <span class="text">Passer Le Quizz</span>
          </button>
        </div>

        <div className="home-description">
          <h1>Bienvenue chez DevRecruit 🚀</h1>

          <p>
            <strong>Innovateurs par Passion, Développeurs par Métier</strong>
          </p>

          <p>
            Chez DevRecruit, nous façonnons l'avenir numérique avec notre équipe
            dévouée de développeurs talentueux. Que vous ayez besoin de
            solutions logicielles sur mesure, de développement d'applications
            mobiles ou de conseils technologiques de pointe, nous sommes là pour
            concrétiser votre vision.
          </p>

          <ul>
            <li>
              ✨ <strong>Ce que nous offrons :</strong>
              <ul>
                <li>Expertise dans le développement logiciel sur mesure.</li>
                <li>
                  Solutions innovantes pour les applications mobiles et web.
                </li>
                <li>
                  Conseils technologiques stratégiques pour propulser votre
                  entreprise.
                </li>
              </ul>
            </li>

            <li>
              🤝 <strong>Notre Engagement :</strong>
              <ul>
                <li>
                  Nous croyons en la puissance de la collaboration et de
                  l'innovation.
                </li>
                <li>
                  Notre équipe dédiée travaille en étroite collaboration avec
                  vous pour comprendre vos besoins uniques et offrir des
                  solutions qui dépassent vos attentes.
                </li>
              </ul>
            </li>

            <li>
              🚀 <strong>Pourquoi choisir DevRecruit ?</strong>
              <ul>
                <li>Excellence technique et créativité.</li>
                <li>Engagement envers la satisfaction du client.</li>
                <li>Livraison à temps, à chaque fois.</li>
              </ul>
            </li>
          </ul>
          <p>
            <em>Transformons le code en opportunités.</em> 🌐
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
