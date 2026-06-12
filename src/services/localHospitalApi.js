import { departments, getDepartmentBySlug, getDoctorById } from "../data/hospitalData";
import {
  clearCurrentUser,
  createBooking,
  findBooking,
  getCurrentUser,
  saveCurrentUser,
  savePatientRegistration,
} from "../utils/storage";

export const localHospitalApi = {
  getDepartments() {
    return departments;
  },

  getDepartment(slug) {
    return getDepartmentBySlug(slug);
  },

  getDoctor(departmentSlug, doctorId) {
    return getDoctorById(departmentSlug, doctorId);
  },

  createAppointment(payload) {
    return createBooking(payload);
  },

  trackAppointment(searchTerm) {
    return findBooking(searchTerm);
  },

  createPatientProfile(profile) {
    return savePatientRegistration(profile);
  },

  login({ email, name }) {
    saveCurrentUser({ email: email.trim(), name: name?.trim() });
    return getCurrentUser();
  },

  signup({ name, email }) {
    saveCurrentUser({ name: name.trim(), email: email.trim() });
    return getCurrentUser();
  },

  getSession() {
    return getCurrentUser();
  },

  logout() {
    clearCurrentUser();
  },
};
