import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { routes } from "./config/routes";
import HomePage from "./pages/home/HomePage";
import DepartmentsPage from "./pages/departments/DepartmentsPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import BookingPage from "./pages/booking/BookingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import RegistrationPage from "./pages/RegistrationPage";
import BookingTrackerPage from "./pages/BookingTrackerPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.departments} element={<DepartmentsPage />} />
        <Route path="/departments/:department" element={<DoctorsPage />} />
        <Route path="/departments/:department/:doctorId" element={<BookingPage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path={routes.registration} element={<RegistrationPage />} />
        <Route path={routes.legacyRegistration} element={<Navigate to={routes.registration} replace />} />
        <Route path={routes.checkStatus} element={<BookingTrackerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
