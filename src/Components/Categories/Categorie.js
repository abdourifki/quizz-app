import React from "react";
import "../Categories/Categorie.css";
import Card from "react-bootstrap/Card";
import front from "../../Assets/frontEnd.png";
import back from "../../Assets/backEnd.png";
import full from "../../Assets/fullStack.png";
import 'bootstrap/dist/css/bootstrap.min.css';
const Categorie = () => {
    const imageSizeStyle = {
        width: "100%", // Set your desired width
        height: "350px", // Set your desired height
        objectFit: "cover", // Maintain aspect ratio and cover the container
      };
  return (
    <>
      <h1>Categorys</h1>

      <div className="card-container">
        <Card style={{ width: "350px" }} className="card">
          <Card.Img variant="top" src={front} style={imageSizeStyle} />
          <hr />
          <Card.Body className="body">
            <Card.Title className="desc" >Front-End</Card.Title>
            <Card.Text className="desc">
            Dive into the creative and interactive world of front-end development, designing user interfaces.
  
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "350px" }} className="card">
          <Card.Img variant="top" src={back}  style={imageSizeStyle} />
          <hr />
          <Card.Body className="body">
            <Card.Title className="desc">Back-End</Card.Title>
            <Card.Text className="desc">
            Master the server-side technologies and database management to build robust and scalable back-end systems.

            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "350px"}} className="card">
          <Card.Img variant="top" src={full} style={imageSizeStyle} />
          <hr />
          <Card.Body className="body">
            <Card.Title className="desc">Full-Stack</Card.Title>
            <Card.Text className="desc">
            Explore the world of full-stack development with expertise in both front-end and back-end technologies.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Categorie;
