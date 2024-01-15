import React from 'react'


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AboutCards } from "./AboutCards";
import projImg1 from "../assets/img/Muhammad Darab.jpg";
import projImg2 from "../assets/img/Developer pics.jpg";
import projImg3 from "../assets/img/Developer pics.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {

  const About = [
    {
      title: "Muhammad Darab",
      description: "Have completed BSCS and Experienced React JS, and .NET Developerand Continueing the React JS from BanoQabil 2.0",
      imgUrl: projImg1,
    },
    {
      title: "Talal Abid",
      description: "Have completed BSCS and Experienced and React JS Continueing the React JS from BanoQabil 2.0 ",
      imgUrl: projImg2,
    },
    {
      title: "Muhammad Salman",
      description: "Completeing the Diploma and Continueing the React JS from BanoQabil 2.0",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="About">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Us</h2>
                
                <Tab.Container id="About-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideIndown" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          About.map((project, index) => {
                            return (
                              <AboutCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
