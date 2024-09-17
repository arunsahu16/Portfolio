import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AudioBook from "../../Assets/Projects/AudioBook.png"
import MovieApp from "../../Assets/Projects/MovieApp.png"
import LetsChat from "../../Assets/Projects/LetsChat.png"
import Creditcard from "../../Assets/Projects/creditcard.png"
import Payroll from "../../Assets/Projects/Payroll.png"

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
              imgPath={AudioBook}
              isBlog={false}
              title="AudioBook"
              description="This Audiobook app allows users to view, filter, and sort audiobooks based on author,rating, and genre. It's built using React for the front-end and React Bootstrap for styling and layout. The app also includes animations to enhance user experience."
              ghLink="https://github.com/arunsahu16/Audio_Book.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Creditcard}
              isBlog={false}
              title="Credit Card Approval"
              description="The project aims to predict how likely a credit card request will get approved based on age, gender, credit score, income, debt, etc. Explored the data to understand the relationship of various features with the target (Approval Status). "
              ghLink="https://github.com/arunsahu16/CreditCardApproval.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Payroll}
              isBlog={false}
              title="Employee Payroll Management System"
              description="Created explicit/ref cursors for payroll, developed CDB/PDB with users, handled cursor_already_open exceptions, designed relational/materialized views, indexed AccountDetails table, and built an E-R diagram for payroll management systems."
              ghLink="https://github.com/arunsahu16/EmployeePayrollManagementSystem.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieApp}
              isBlog={false}
              title="MovieApp"
              description="This Movie app fetch all the movie data from omdb and allows the user to search and sort the movies. Also this app uses the Async storage for saving favourite movies and suggesting the top movies."
              
              ghLink="https://github.com/arunsahu16/React_Native_MovieApp.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LetsChat}
              isBlog={false}
              title="LetsChat"
              description="LetsChat is a anonymous chat appliation. With a end-to-end encryption feature. It also have a total active user feature. "
              ghLink="https://github.com/arunsahu16/LetsChat.git"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
