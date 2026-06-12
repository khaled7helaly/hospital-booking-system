const formatDate = (value) => {
  if (!value) return "Not selected";
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
};

const StatusDetails = ({ bookingStatus, booking }) => {
  if (!bookingStatus) return null;

  if (bookingStatus === "not_found") {
    return (
      <div className="status-details status-details-error">
        <h3>Booking Not Found</h3>
        <p>Please check the booking reference, phone number, email, or patient ID and try again.</p>
      </div>
    );
  }

  if (!booking) return null;

  return (
    <div className="status-details status-details-success">
      <div className="status-header">
        <div>
          <span className="status-label">Current Status</span>
          <h3>{booking.status === "confirmed" ? "Appointment Confirmed" : "Request Pending"}</h3>
        </div>
        <strong>{booking.id}</strong>
      </div>

      <div className="status-grid">
        <p>
          <span>Patient</span>
          <strong>{booking.patient.name}</strong>
        </p>
        <p>
          <span>Department</span>
          <strong>{booking.department.name}</strong>
        </p>
        <p>
          <span>Doctor</span>
          <strong>{booking.doctor.name}</strong>
        </p>
        <p>
          <span>Specialty</span>
          <strong>{booking.doctor.specialty}</strong>
        </p>
        <p>
          <span>Date</span>
          <strong>{formatDate(booking.patient.date)}</strong>
        </p>
        <p>
          <span>Time</span>
          <strong>{booking.patient.time}</strong>
        </p>
        <p>
          <span>Clinic</span>
          <strong>{booking.doctor.location}</strong>
        </p>
        <p>
          <span>Fees</span>
          <strong>{booking.doctor.fees}</strong>
        </p>
      </div>

      <button type="button" className="submit-button status-print-button" onClick={() => window.print()}>
        Print Confirmation
      </button>
    </div>
  );
};

export default StatusDetails;
