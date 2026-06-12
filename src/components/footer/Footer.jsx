import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { routes } from "../../config/routes";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5">
          <Col md={4} sm={12} className="mb-4">
            <h4 className="footer-title">Medic Hospital</h4>
            <p>Providing quality healthcare with experienced medical professionals and a clear appointment booking flow.</p>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to={routes.home}>Home</Link>
              </li>
              <li>
                <Link to={routes.departments}>Departments</Link>
              </li>
              <li>
                <Link to={routes.registration}>Patient Profile</Link>
              </li>
              <li>
                <Link to={routes.checkStatus}>Track Booking</Link>
              </li>
              <li>
                <Link to={routes.contact}>Contact</Link>
              </li>
            </ul>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <h5 className="footer-subtitle">Contact Us</h5>
            <p>City Hospital - Main Branch</p>
            <p>Email: support@medic-hospital.com</p>
            <p>Phone: +20 100 000 0000</p>
            <div className="social-icons" aria-label="Social media placeholders">
              <span aria-label="Facebook"><FaFacebookF /></span>
              <span aria-label="Twitter"><FaTwitter /></span>
              <span aria-label="Instagram"><FaInstagram /></span>
              <span aria-label="LinkedIn"><FaLinkedinIn /></span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center pt-3 border-top border-secondary">
            <p>&copy; {new Date().getFullYear()} Medic Hospital. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
