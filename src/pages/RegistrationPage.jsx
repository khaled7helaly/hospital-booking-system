import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { RegistrationDesignContent } from "../components/DesignSection";
import FlowSteps from "../components/common/FlowSteps";
import { routes } from "../config/routes";
import { localHospitalApi } from "../services/localHospitalApi";
import { isValidNationalId, isValidPhone } from "../utils/validation";

const initialFormData = {
  registrationFor: "My self",
  fullName: "",
  mobileNumber: "",
  email: "",
  idType: "NationalID",
  idNumber: "",
};

const RegistrationPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [verifiedPhone, setVerifiedPhone] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
    setSuccessMessage("");
    setErrorMessage("");

    if (name === "mobileNumber") setVerifiedPhone(false);
  };

  const handleVerifyPhone = () => {
    if (!isValidPhone(formData.mobileNumber)) {
      setErrorMessage("Please enter a valid mobile number before verification.");
      return;
    }

    setVerifiedPhone(true);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhone(formData.mobileNumber)) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    if (!isValidNationalId(formData.idNumber)) {
      setErrorMessage("Please enter a valid patient ID number.");
      return;
    }

    const registration = localHospitalApi.createPatientProfile({
      registrationFor: formData.registrationFor,
      fullName: formData.fullName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      email: formData.email.trim(),
      idType: formData.idType,
      idNumber: formData.idNumber.trim(),
      phoneVerified: verifiedPhone,
    });

    setSuccessMessage(`Patient profile created successfully. Reference: ${registration.id}`);
    setFormData(initialFormData);
    setVerifiedPhone(false);
  };

  const formContent = (
    <>
      <span className="form-eyebrow">Patient profile</span>
      <h2>Create a Patient Profile</h2>
      <p className="form-intro">
        Register patient details once to make future appointment booking faster and easier.
      </p>

      <FlowSteps currentStep={1} />

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>I am registering for</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="registrationFor"
                value="My self"
                checked={formData.registrationFor === "My self"}
                onChange={handleChange}
              />
              Myself
            </label>
            <label>
              <input
                type="radio"
                name="registrationFor"
                value="Other people"
                checked={formData.registrationFor === "Other people"}
                onChange={handleChange}
              />
              Another patient
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Patient Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <small>Appointment notifications and reminders can be sent to this number.</small>
          <div className="input-with-button">
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Phone number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <button type="button" className="verify-button" onClick={handleVerifyPhone}>
              {verifiedPhone ? "Verified" : "Verify"}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="patient@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Patient ID Number</label>
          <div className="id-group">
            <select name="idType" value={formData.idType} onChange={handleChange} required>
              <option value="NationalID">National ID</option>
              <option value="Passport">Passport</option>
              <option value="ResidencyID">Residency ID</option>
            </select>
            <input
              type="text"
              name="idNumber"
              placeholder="ID number"
              value={formData.idNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Save Patient Profile
        </button>
      </form>

      <p className="check-status">
        Ready to book? <Link to={routes.departments}>Choose a department</Link>
      </p>
    </>
  );

  return <Layout designContent={<RegistrationDesignContent />} formContent={formContent} />;
};

export default RegistrationPage;
