import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaHeartbeat } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { departmentPath, routes } from "../../config/routes";
import { localHospitalApi } from "../../services/localHospitalApi";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const departments = localHospitalApi.getDepartments();
  const [currentUser, setCurrentUser] = useState(() => localHospitalApi.getSession());

  useEffect(() => {
    const syncUser = () => setCurrentUser(localHospitalApi.getSession());

    window.addEventListener("medic-auth-change", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("medic-auth-change", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localHospitalApi.logout();
    navigate(routes.home);
  };

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to={routes.home} className="brand-logo">
          <FaHeartbeat /> Medic
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto nav-links">
            <Nav.Link as={NavLink} to={routes.home} end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.departments}>
              Departments
            </Nav.Link>

            <NavDropdown title="Doctors" id="doctors-dropdown">
              {departments.map((department) => (
                <NavDropdown.Item as={Link} key={department.slug} to={departmentPath(department.slug)}>
                  {department.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={NavLink} to={routes.registration}>
              Patient Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.checkStatus}>
              Track Booking
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.contact}>
              Contact
            </Nav.Link>
          </Nav>

          <div className="navbar-actions">
            {currentUser?.isAuthenticated ? (
              <>
                <span className="user-pill">{currentUser.name || currentUser.email}</span>
                <Button type="button" className="btn-auth-outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to={routes.login} className="btn-auth-outline">
                  Login
                </Button>
                <Button as={Link} to={routes.departments} className="btn-get-started">
                  Book Now
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
