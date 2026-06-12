import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SignupImg from "../../assets/images/Doctors-pana.png";
import { routes } from "../../config/routes";
import { localHospitalApi } from "../../services/localHospitalApi";
import "./Signup.css";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    localHospitalApi.signup({ name: formData.name, email: formData.email });
    navigate(routes.registration);
  };

  return (
    <section className="auth-section">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100 g-4">
          <Col lg={6} className="d-none d-lg-block">
            <div className="auth-image-card">
              <img src={SignupImg} alt="Create patient account" />
            </div>
          </Col>

          <Col md={8} lg={5}>
            <div className="auth-card">
              <span className="auth-eyebrow">New patient</span>
              <h2>Create Your Account</h2>
              <p>Create an account, then complete your patient profile before booking.</p>

              {message && <Alert variant="danger">{message}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-signup w-100 mb-3">
                  Sign Up
                </Button>

                <p className="text-center mb-0">
                  Already have an account? <Link to={routes.login}>Login</Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
