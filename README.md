# Medic Hospital Booking System

A React + Vite hospital appointment booking frontend. The project includes a homepage, departments, doctors by department, appointment booking, patient profile registration, booking tracker, contact page, login, and signup screens.

## Tech Stack

- React 19
- Vite
- React Router
- React Bootstrap
- Bootstrap
- React Icons
- ESLint
- localStorage for frontend-only prototype persistence

## Main Features

- Professional route flow: `Departments -> Doctors -> Booking -> Tracking`.
- Clean lowercase route slugs for departments.
- Department and doctor data separated from UI components.
- Reusable department and doctor cards.
- Shared flow steps, section headers, breadcrumbs, and empty states.
- Centralized route configuration in `src/config/routes.js`.
- Frontend service layer in `src/services/localHospitalApi.js`.
- Booking page saves appointment data in localStorage and generates a booking reference.
- Booking tracker searches real saved bookings by reference, phone, email, or patient ID.
- Patient profile registration saves patient details locally.
- Login and signup use safe demo localStorage state without exposing passwords.
- Navbar shows active links, patient profile, track booking, and auth state.
- Contact form uses controlled inputs and success feedback.
- Invalid routes open a Not Found page.

## Professional Folder Structure

```txt
src/
  assets/
    images/
  components/
    about/
    cards/
      DepartmentCard.jsx
      DoctorCard.jsx
      Cards.css
    choose/
    common/
      BreadcrumbTrail.jsx
      EmptyState.jsx
      FlowSteps.jsx
      SectionHeader.jsx
    departments/
    footer/
    hero/
    navbar/
    stats/
    DesignSection.jsx
    Layout.jsx
    StatusDetails.jsx
  config/
    routes.js
  data/
    hospitalData.js
  pages/
    booking/
    contact/
    departments/
    doctors/
    home/
    login/
    not-found/
    signup/
    BookingTrackerPage.jsx
    RegistrationPage.jsx
  services/
    localHospitalApi.js
  utils/
    storage.js
    validation.js
  App.jsx
  main.jsx
  index.css
```

## Routes

```txt
/                                Home page
/departments                     Departments page
/departments/:department         Doctors page
/departments/:department/:id     Booking page
/contact                         Contact page
/login                           Login page
/signup                          Signup page
/registration                    Patient profile page
/check-status                    Booking tracker page
/RegistrationPage                Redirects to /registration
*                                Not found page
```

## How to Run

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Quality Checks

The project was checked with:

```bash
npm run lint
npm run build
npm audit --audit-level=low
```

Current result after Phase 3:

```txt
Lint: passed
Build: passed
npm audit: 0 vulnerabilities
```

## Important Notes

This version is still a frontend-only prototype. Login, signup, registration, and booking use localStorage. For a real production system, the next step is adding a secure backend API, database, authentication, authorization, and server-side validation.
