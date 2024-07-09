import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={link}><FaLink /></a>
        </div>
      </div>
    </Col>
  )
}
