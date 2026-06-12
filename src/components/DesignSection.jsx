import doctorImage from "../assets/doctor.png";

const RegistrationDesignContent = () => {
  return (
    <div className="doctor-image-container">
      <img src={doctorImage} alt="Smiling doctor with a clipboard" className="doctor-photo" />
      <p className="stat">🗂️ One profile for faster booking</p>
      <p className="stat-bottom">✅ Secure patient details</p>
    </div>
  );
};

const TrackerDesignContent = () => {
  return (
    <div className="doctor-image-container tracker-design-card">
      <div className="tracker-icon">📊</div>
      <h2>Fast Booking Updates</h2>
      <p>Use your reference number to view doctor, clinic, date, and appointment status.</p>
      <p className="stat-bottom">Reliable local tracking</p>
    </div>
  );
};

export { RegistrationDesignContent, TrackerDesignContent };
