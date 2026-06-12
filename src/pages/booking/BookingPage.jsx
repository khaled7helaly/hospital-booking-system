import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import BreadcrumbTrail from "../../components/common/BreadcrumbTrail";
import EmptyState from "../../components/common/EmptyState";
import FlowSteps from "../../components/common/FlowSteps";
import { bookingPath, departmentPath, routes, trackingPath } from "../../config/routes";
import { localHospitalApi } from "../../services/localHospitalApi";
import { isValidPhone } from "../../utils/validation";
import "./BookingPage.css";

const initialFormData = {
  patientName: "",
  phone: "",
  email: "",
  idNumber: "",
  date: "",
  time: "",
  visitType: "Consultation",
  notes: "",
};

const BookingPage = () => {
  const { department: departmentSlug = "", doctorId = "" } = useParams();
  const department = localHospitalApi.getDepartment(departmentSlug);
  const doctor = localHospitalApi.getDoctor(departmentSlug, doctorId);
  const [formData, setFormData] = useState(initialFormData);
  const [booking, setBooking] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const availableTimes = doctor?.availableTimes || [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhone(formData.phone)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    const savedBooking = localHospitalApi.createAppointment({
      department,
      doctor,
      patient: {
        name: formData.patientName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        idNumber: formData.idNumber.trim(),
        date: formData.date,
        time: formData.time,
        visitType: formData.visitType,
        notes: formData.notes.trim(),
      },
    });

    setBooking(savedBooking);
    setFormData(initialFormData);
  };

  if (!department || !doctor) {
    return (
      <Container className="booking-page">
        <EmptyState
          title="Doctor not found"
          description="Please choose a valid doctor from the departments page."
          actionLabel="Back to Departments"
          actionTo={routes.departments}
        />
      </Container>
    );
  }

  return (
    <section className="booking-page">
      <Container>
        <BreadcrumbTrail
          label="Booking steps"
          items={[
            { label: "Departments", to: routes.departments },
            { label: department.name, to: departmentPath(department.slug) },
            { label: doctor.name },
          ]}
        />

        <FlowSteps currentStep={3} />

        <Row className="justify-content-center">
          <Col lg={11}>
            <Card className="booking-card shadow-lg">
              <Row className="g-0">
                <Col lg={4} className="booking-summary">
                  <img src={doctor.image} alt={doctor.name} className="booking-doctor-img" />
                  <h2>{doctor.name}</h2>
                  <p>{doctor.specialty}</p>
                  <div className="doctor-meta-list">
                    <span>⭐ {doctor.rating}</span>
                    <span>Experience: {doctor.experience}</span>
                    <span>{doctor.location}</span>
                    <span>Fees: {doctor.fees}</span>
                  </div>
                  <Link to={bookingPath(department.slug, doctor.id)} className="booking-current-link">
                    Secure appointment form
                  </Link>
                </Col>

                <Col lg={8}>
                  <Card.Body className="booking-form-wrapper">
                    <div className="booking-form-heading">
                      <span>{department.name} Department</span>
                      <h3>Book Appointment</h3>
                      <p>
                        Complete the patient details below. After confirmation, use the reference number to track
                        the appointment status.
                      </p>
                    </div>

                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                    {booking && (
                      <Alert variant="success" className="booking-success-box">
                        <h4>Appointment confirmed successfully</h4>
                        <p>
                          Booking reference: <strong>{booking.id}</strong>
                        </p>
                        <Link to={trackingPath(booking.id)} className="booking-track-link">
                          Track this booking
                        </Link>
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit} noValidate={false}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="patientName">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="patientName"
                              placeholder="Enter patient full name"
                              value={formData.patientName}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="idNumber">
                            <Form.Label>Patient ID Number</Form.Label>
                            <Form.Control
                              type="text"
                              name="idNumber"
                              placeholder="National ID or passport"
                              value={formData.idNumber}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              placeholder="Enter phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter email address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Appointment Date</Form.Label>
                            <Form.Control
                              type="date"
                              name="date"
                              min={minDate}
                              value={formData.date}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>

                        <Col md={4}>
                          <Form.Group className="mb-3" controlId="time">
                            <Form.Label>Appointment Time</Form.Label>
                            <Form.Select name="time" value={formData.time} onChange={handleChange} required>
                              <option value="">Choose time</option>
                              {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col md={4}>
                          <Form.Group className="mb-3" controlId="visitType">
                            <Form.Label>Visit Type</Form.Label>
                            <Form.Select name="visitType" value={formData.visitType} onChange={handleChange} required>
                              <option value="Consultation">Consultation</option>
                              <option value="Follow-up">Follow-up</option>
                              <option value="Urgent Case">Urgent Case</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4" controlId="notes">
                        <Form.Label>Medical Notes</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="notes"
                          placeholder="Write any important notes for the doctor"
                          value={formData.notes}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Button type="submit" className="booking-submit w-100">
                        Confirm Booking
                      </Button>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookingPage;
