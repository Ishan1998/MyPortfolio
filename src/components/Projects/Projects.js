import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather_Forecast_App from "../../Assets/Projects/Weather_Forecast_App.png";
import Timer_App from "../../Assets/Projects/Timer_App.png";
import Nike from "../../Assets/Projects/Nike.png";
import Quiz_App from "../../Assets/Projects/Quiz_App.png";
import Clock from "../../Assets/Projects/Clock.png";
import App from "../../Assets/Projects/App.png";
import Weather_App from "../../Assets/Projects/Weather_App.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Timer_App}
              isBlog={false}
              title="Countdown Timer App"
              description="This is my small project it's a New Year's Eve time calculation web application made with HTML,CSS,JavaScript."
              ghLink="https://github.com/Ishan1998/Countdown-Timer-App"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nike}
              isBlog={false}
              title="Nike Shoe Market"
              description="It's basically a static E-commerce website build with HTML,CSS,JavaScript."
              ghLink="https://github.com/Ishan1998/Nike_Shoe_Market"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clock}
              isBlog={false}
              title="Digital Clock"
              description="My small project in Python which tells the current time. I have used Tkinter library for GUI (Graphical User Interface)."
              ghLink="https://github.com/Ishan1998/Digital-Clock"
              // demoLink=""        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={App}
              isBlog={false}
              title="Text to Handwriting"
              description="This is a Conversion app built in Python using Kivy to create Graphical User interfaces (GUIs). In this application you have to input the text you want to convert into handwriting form and it saves the output in an image file (.png) with name Output.png."
              ghLink="https://github.com/Ishan1998/Text-To-Handwriting"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz_App}
              isBlog={false}
              title="Quiz App"
              description="Quiz App has random questions and at the last it shows your result when the quiz is completed. This web application is built using HTML,CSS and JavaScript."
              ghLink="https://github.com/Ishan1998/Quiz_App"
              // demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather_App}
              isBlog={false}
              title="Weather App (Python)"
              description="This is a Weather Forecast Application built in Python using Tkinter to create Graphical User interfaces (GUIs) and it uses api to get request and shows the Weather forecast of the location."
              ghLink="https://github.com/Ishan1998/Weather-App"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather_Forecast_App}
              isBlog={false}
              title="Weather Forecast App (Django)"
              description="This is a Weather Forecast Application built in Django and it fetches data from api and display the results on the page."
              ghLink="https://github.com/Ishan1998/Weather_Forecast_App"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
