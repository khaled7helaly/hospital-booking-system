import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { TrackerDesignContent } from "../components/DesignSection";
import FlowSteps from "../components/common/FlowSteps";
import StatusDetails from "../components/StatusDetails";
import { routes } from "../config/routes";
import { localHospitalApi } from "../services/localHospitalApi";

const BookingTrackerPage = () => {
  const [searchParams] = useSearchParams();
  const initialReference = searchParams.get("ref") || "";
  const initialBooking = initialReference ? localHospitalApi.trackAppointment(initialReference) : null;
  const [trackingID, setTrackingID] = useState(initialReference);
  const [bookingStatus, setBookingStatus] = useState(initialReference ? initialBooking?.status || "not_found" : null);
  const [booking, setBooking] = useState(initialBooking);

  const trackBooking = (value) => {
    const matchedBooking = localHospitalApi.trackAppointment(value);

    if (!matchedBooking) {
      setBooking(null);
      setBookingStatus("not_found");
      return;
    }

    setBooking(matchedBooking);
    setBookingStatus(matchedBooking.status);
  };

  const handleChange = (event) => {
    setTrackingID(event.target.value);
    setBookingStatus(null);
    setBooking(null);
  };

  const handleTrack = (event) => {
    event.preventDefault();
    trackBooking(trackingID);
  };

  const formContent = (
    <>
      <span className="form-eyebrow">Track appointment</span>
      <h2>Track Your Booking Status</h2>
      <p className="form-intro">
        Enter the booking reference, phone number, email, or patient ID used during appointment booking.
      </p>

      <FlowSteps currentStep={4} />

      <form onSubmit={handleTrack}>
        <div className="form-group">
          <label htmlFor="trackingID">Booking Reference / Patient Contact</label>
          <input
            type="text"
            id="trackingID"
            name="trackingID"
            placeholder="Example: MED-123456-7890"
            value={trackingID}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Track Status
        </button>
      </form>

      <StatusDetails bookingStatus={bookingStatus} booking={booking} />

      <p className="check-status">
        Need a new appointment? <Link to={routes.departments}>Book now</Link>
      </p>
    </>
  );

  return <Layout designContent={<TrackerDesignContent />} formContent={formContent} />;
};

export default BookingTrackerPage;
