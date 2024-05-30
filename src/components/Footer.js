import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const year  = () => new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{ marginTop: 14 }} className="social-icon">
              <a target="_blank" rel="noreferrer noopener"  href="https://www.linkedin.com/in/brunobahridev/"><img src={navIcon1} alt="Linkedin logo" /></a>
              <a target="_blank" rel="noreferrer noopener" href="https://github.com/brunobahri"><img src={navIcon2} alt="Github logo" /></a> 
            </div>
            <p>Copyright {year()} Bruno Sergio. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
