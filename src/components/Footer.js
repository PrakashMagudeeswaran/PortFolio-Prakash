import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { MdPhoneInTalk } from "react-icons/md";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <p><MdPhoneInTalk />  : 9952291270 / 9385585381</p>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
