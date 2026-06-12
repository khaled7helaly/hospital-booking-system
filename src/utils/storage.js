const STORAGE_KEYS = {
  bookings: "medicBookings",
  patients: "medicPatients",
  user: "medicUser",
};

const safeParse = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const canUseStorage = () => typeof window !== "undefined" && Boolean(window.localStorage);

const notifyAuthChange = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("medic-auth-change"));
};

export const getBookings = () => {
  if (!canUseStorage()) return [];
  return safeParse(localStorage.getItem(STORAGE_KEYS.bookings), []);
};

export const saveBookings = (bookings) => {
  if (!canUseStorage()) return;
  localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(bookings));
};

export const createBookingReference = () => {
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `MED-${Date.now().toString().slice(-6)}-${randomPart}`;
};

export const createBooking = ({ department, doctor, patient }) => {
  const booking = {
    id: createBookingReference(),
    status: "confirmed",
    createdAt: new Date().toISOString(),
    department: {
      slug: department.slug,
      name: department.name,
    },
    doctor: {
      id: doctor.id,
      name: doctor.name,
      specialty: doctor.specialty,
      location: doctor.location,
      fees: doctor.fees,
    },
    patient,
  };

  saveBookings([booking, ...getBookings()]);
  return booking;
};

export const findBooking = (searchTerm) => {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  if (!normalizedSearch) return null;

  return (
    getBookings().find((booking) => {
      const searchableValues = [
        booking.id,
        booking.patient?.phone,
        booking.patient?.email,
        booking.patient?.idNumber,
      ]
        .filter(Boolean)
        .map((value) => String(value).toLowerCase());

      return searchableValues.includes(normalizedSearch);
    }) || null
  );
};

export const savePatientRegistration = (patient) => {
  if (!canUseStorage()) return null;

  const registration = {
    id: `REG-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    ...patient,
  };

  const patients = safeParse(localStorage.getItem(STORAGE_KEYS.patients), []);
  localStorage.setItem(STORAGE_KEYS.patients, JSON.stringify([registration, ...patients]));
  return registration;
};

export const saveCurrentUser = (user) => {
  if (!canUseStorage()) return;
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify({ ...user, isAuthenticated: true }));
  notifyAuthChange();
};

export const getCurrentUser = () => {
  if (!canUseStorage()) return null;
  return safeParse(localStorage.getItem(STORAGE_KEYS.user), null);
};

export const clearCurrentUser = () => {
  if (!canUseStorage()) return;
  localStorage.removeItem(STORAGE_KEYS.user);
  notifyAuthChange();
};
