import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBaby, FaBone, FaEye, FaHeartbeat, FaSmile, FaUserMd } from "react-icons/fa";
import { departmentPath } from "../../config/routes";
import { localHospitalApi } from "../../services/localHospitalApi";
import "./Departments.css";

const iconMap = {
  orthopedics: FaBone,
  pediatrics: FaBaby,
  dermatology: FaUserMd,
  ophthalmology: FaEye,
  dentistry: FaSmile,
  cardiology: FaHeartbeat,
};

const Departments = () => {
  const departments = localHospitalApi.getDepartments();

  return (
    <section className="home-departments-section" id="departments">
      <Container>
        <div className="text-center mb-5">
          <p className="home-departments-subtitle">For Your Health</p>
          <h2 className="home-departments-section-title">OUR DEPARTMENTS</h2>
        </div>

        <div className="home-departments-row">
          {departments.map((department) => {
            const Icon = iconMap[department.slug] || FaUserMd;
            return (
              <div key={department.slug} className="home-department-card fade-up-animate">
                <div className="home-department-icon">
                  <Icon className="dept-svg" />
                </div>
                <div className="home-tit_card">
                  <h4 className="home-department-title">{department.name}</h4>
                  <p className="home-department-description">{department.description}</p>
                  <Link to={departmentPath(department.slug)} className="home-department-link">
                    View Doctors →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Departments;
