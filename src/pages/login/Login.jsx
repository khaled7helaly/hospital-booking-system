import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/images/Doctors-amico.png";
import { routes } from "../../config/routes";
import { localHospitalApi } from "../../services/localHospitalApi";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    localHospitalApi.login({ email });
    navigate(routes.departments);
  };

  return (
    <section className="auth-section">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100 g-4">
          <Col lg={6} className="d-none d-lg-block">
            <div className="auth-image-card">
              <img src={LoginImg} alt="Doctor portal login" />
            </div>
          </Col>

          <Col md={8} lg={5}>
            <div className="auth-card">
              <span className="auth-eyebrow">Welcome back</span>
              <h2>Login to Your Account</h2>
              <p>Continue to book appointments and manage your hospital profile.</p>

              {message && <Alert variant="danger">{message}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    minLength={6}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-login w-100 mb-3">
                  Login
                </Button>

                <p className="text-center mb-0">
                  Don&apos;t have an account? <Link to={routes.signup}>Sign Up</Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
