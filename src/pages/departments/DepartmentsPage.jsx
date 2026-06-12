import { Col, Container, Row } from "react-bootstrap";
import DepartmentCard from "../../components/cards/DepartmentCard";
import FlowSteps from "../../components/common/FlowSteps";
import SectionHeader from "../../components/common/SectionHeader";
import { localHospitalApi } from "../../services/localHospitalApi";
import "./DepartmentsPage.css";

export default function DepartmentsPage() {
  const departments = localHospitalApi.getDepartments();

  return (
    <section className="department-page">
      <Container>
        <SectionHeader
          eyebrow="Step 1"
          title="Choose Medical Department"
          description="Select the department first, then choose the suitable doctor and appointment time."
        />

        <FlowSteps currentStep={1} className="department-flow" />

        <Row className="g-4">
          {departments.map((department) => (
            <Col md={6} lg={4} key={department.id}>
              <DepartmentCard department={department} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
