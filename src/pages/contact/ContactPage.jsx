import { useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./ContactPage.css";

const initialFormData = {
  name: "",
  email: "",
  subject: "Appointment Support",
  message: "",
};

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section className="contact-page">
      <Container>
        <div className="contact-heading">
          <span>Contact Us</span>
          <h1>We are here to help you</h1>
          <p>Send your question or visit our main branch for support and appointment information.</p>
        </div>

        <Row className="g-4">
          <Col lg={5}>
            <Card className="contact-info-card h-100">
              <Card.Body>
                <h3>Hospital Information</h3>
                <p>
                  <strong>Address:</strong> City Hospital - Main Branch
                </p>
                <p>
                  <strong>Phone:</strong> +20 100 000 0000
                </p>
                <p>
                  <strong>Email:</strong> support@medic-hospital.com
                </p>
                <p>
                  <strong>Working Hours:</strong> 09:00 AM - 09:00 PM
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="contact-form-card h-100">
              <Card.Body>
                {submitted && (
                  <Alert variant="success">
                    Your message was saved successfully. The support team will contact you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="contactSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select name="subject" value={formData.subject} onChange={handleChange} required>
                      <option value="Appointment Support">Appointment Support</option>
                      <option value="Patient Profile">Patient Profile</option>
                      <option value="Doctor Inquiry">Doctor Inquiry</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="contact-submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
