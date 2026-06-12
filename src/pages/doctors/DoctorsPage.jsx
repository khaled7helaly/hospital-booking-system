import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import DoctorCard from "../../components/cards/DoctorCard";
import BreadcrumbTrail from "../../components/common/BreadcrumbTrail";
import EmptyState from "../../components/common/EmptyState";
import FlowSteps from "../../components/common/FlowSteps";
import { localHospitalApi } from "../../services/localHospitalApi";
import { routes } from "../../config/routes";
import "./DoctorsPage.css";

export default function DoctorsPage() {
  const { department: departmentSlug = "" } = useParams();
  const department = localHospitalApi.getDepartment(departmentSlug);

  if (!department) {
    return (
      <Container className="py-5">
        <EmptyState
          title="Department not found"
          description="Please choose a valid department from the departments page."
          actionLabel="Back to Departments"
          actionTo={routes.departments}
        />
      </Container>
    );
  }

  return (
    <section className="doctors-page">
      <Container>
        <BreadcrumbTrail
          label="Doctors breadcrumb"
          items={[
            { label: "Departments", to: routes.departments },
            { label: department.name },
          ]}
        />

        <FlowSteps currentStep={2} className="doctors-flow" />

        <div className="department-info" style={{ backgroundImage: `url(${department.info.image})` }}>
          <div className="department-info-overlay">
            <div className="department-info-text">
              <span>Step 2</span>
              <h1>{department.info.title}</h1>
              <p>{department.info.description}</p>

              <div className="department-stats">
                <div className="stat-card">🩺 {department.doctors.length} Doctors</div>
                <div className="stat-card">🏥 Specialized Clinics</div>
                <div className="stat-card">✅ Instant Booking</div>
              </div>

              <ul className="department-highlights">
                {department.info.highlights.map((highlight) => (
                  <li key={highlight} className="highlight-item">
                    <span className="highlight-icon">✓</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="doctors-container">
          <div className="doctors-heading">
            <h2>Available Doctors</h2>
            <p>Choose a doctor to view available times and continue to appointment booking.</p>
          </div>

          <Row className="g-4">
            {department.doctors.map((doctor) => (
              <Col md={6} lg={4} key={doctor.id}>
                <DoctorCard departmentSlug={department.slug} doctor={doctor} />
              </Col>
            ))}
          </Row>

          <div className="doctors-back-link">
            <Link to={routes.departments}>Choose another department</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
