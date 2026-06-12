import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cards.css";

const DoctorCard = ({ departmentSlug, doctor }) => {
  return (
    <Card className="doctor-card h-100 professional-card">
      <div className="doctor-image-container card-image-container">
        <Card.Img variant="top" src={doctor.image} className="doctor-img card-img-cover" alt={doctor.name} />
      </div>
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Text>{doctor.specialty}</Card.Text>
        <div className="doctor-card-meta">
          <span>⭐ {doctor.rating}</span>
          <span>{doctor.experience}</span>
          <span>{doctor.fees}</span>
        </div>
        <Link to={`/departments/${departmentSlug}/${doctor.id}`} className="btn-book primary-link-button">
          Book Appointment
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
