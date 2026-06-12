export const routes = {
  home: "/",
  departments: "/departments",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
  registration: "/registration",
  legacyRegistration: "/RegistrationPage",
  checkStatus: "/check-status",
};

export const departmentPath = (slug) => `${routes.departments}/${slug}`;
export const bookingPath = (departmentSlug, doctorId) => `${routes.departments}/${departmentSlug}/${doctorId}`;
export const trackingPath = (reference) => `${routes.checkStatus}?ref=${encodeURIComponent(reference)}`;
