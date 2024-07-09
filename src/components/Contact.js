import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useDispatch } from "react-redux";
import { personalData, setalarm } from "../store/dataSlice";
import { alarm } from "../store/dataSlice";

export const Contact = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [ph, setPh] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to update Redux store with form data
    dispatch(personalData({
      fname: fname,
      lname: lname,
      email: email,
      phone: ph,
      message: msg
    }));
    dispatch(setalarm())
    // Optionally, you can reset the form fields after submission
    setFname('');
    setLname('');
    setEmail('');
    setPh('');
    setMsg('');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." value={ph} onChange={(e) => setPh(e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                        <button type="submit"><span>Submit</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
