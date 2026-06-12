import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cards.css";

const DepartmentCard = ({ department }) => {
  return (
    <Card className="department-card h-100 professional-card">
      <div className="department-image-container card-image-container">
        <Card.Img variant="top" src={department.image} className="department-img card-img-cover" alt={department.name} />
      </div>
      <Card.Body>
        <Card.Title>{department.name}</Card.Title>
        <Card.Text>{department.description}</Card.Text>
        <Link to={`/departments/${department.slug}`} className="btn-department primary-link-button">
          View Doctors
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DepartmentCard;
