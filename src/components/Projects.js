import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/nost12.jpg";
import projImg2 from "../assets/img/foodbie.png";
import projImg4 from "../assets/img/youtube.png";
import projImg3 from "../assets/img/netflix.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id:1,
      title: "Nostalgia Marketing",
      description: " A study on the influence of nostalgia on brand attitude and purchase intention of millennials",
      imgUrl: projImg1,
      link:"https://drive.google.com/file/d/17EsOjx5YGp-gJkn2E5rBC3P6XNg_Mgcy/view?usp=sharing"
    },
    {
      id:2,
      title: "Foodie Bee",
      description: "React Food Ordering App-Using MockData",
      imgUrl: projImg2,
        link:"https://mellifluous-taiyaki-865553.netlify.app/"
    },
    {
      id:3,
      title: "NetFlix-Suggestion Google AI ",
      description: "NetFlix HomePage UI & AI assisted mood based movie suggestions using TMDB API",
      imgUrl: projImg3,
       link:"https://moviesaiflix.netlify.app"
    },
    {
      id:4,
      title: "You-Tube Clone",
      description: "Youtube Homepage and Video Page along with Suggestion bar,Comments &Live running Chat ",
      imgUrl: projImg4,
       link:"https://ootube.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className="animate__animated3">
                        {
                          projects.map((project) => {
                            return (
                            
                              <ProjectCard
                                key={project.id}
                                {...project}
                                />
                            )
                           
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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
