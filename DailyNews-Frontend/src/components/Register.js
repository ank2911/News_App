import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Register.css";
import Icon from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [address, setAddress] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  useEffect(() => {
    setPasswordsMatch(password === retypePassword);
  }, [password, retypePassword]);

  const validatePhoneNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  const handleChange = (value) => {
    setPassword(value);
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");
    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      setError("Passwords do not match");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setValidPhoneNumber(false);
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
        phoneNumber,
        address,
      });

      setSuccess(response.data.message);

      setName("");
      setEmail("");
      setPassword("");
      setRetypePassword("");
      setAddress("");

      setError("");
    } catch (error) {
      setError(error.response.data.message);
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>
          <b>Register</b>
        </h2>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => handleChange(e.target.value)}
          required
        />
        {password && (
          <main className="tracker-box">
            <div className={lowerValidated ? "validated" : "not-validated"}>
              {lowerValidated ? (
                <span className="list-icon green">
                  <Icon icon={arrows_circle_check} />
                </span>
              ) : (
                <span className="list-icon">
                  <Icon icon={arrows_exclamation} />
                </span>
              )}
              At least one lowercase letter
            </div>
            <div className={upperValidated ? "validated" : "not-validated"}>
              {upperValidated ? (
                <span className="list-icon green">
                  <Icon icon={arrows_circle_check} />
                </span>
              ) : (
                <span className="list-icon">
                  <Icon icon={arrows_exclamation} />
                </span>
              )}
              At least one uppercase letter
            </div>
            <div className={numberValidated ? "validated" : "not-validated"}>
              {numberValidated ? (
                <span className="list-icon green">
                  <Icon icon={arrows_circle_check} />
                </span>
              ) : (
                <span className="list-icon">
                  <Icon icon={arrows_exclamation} />
                </span>
              )}
              At least one number
            </div>
            <div className={specialValidated ? "validated" : "not-validated"}>
              {specialValidated ? (
                <span className="list-icon green">
                  <Icon icon={arrows_circle_check} />
                </span>
              ) : (
                <span className="list-icon">
                  <Icon icon={arrows_exclamation} />
                </span>
              )}
              At least one special character
            </div>
            <div className={lengthValidated ? "validated" : "not-validated"}>
              {lengthValidated ? (
                <span className="list-icon green">
                  <Icon icon={arrows_circle_check} />
                </span>
              ) : (
                <span className="list-icon">
                  <Icon icon={arrows_exclamation} />
                </span>
              )}
              At least 8 characters
            </div>
          </main>
        )}

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Retype your password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          required
        />
        {/* Display password match status */}
        {!passwordsMatch && (
          <p style={{ color: "black" }}>Passwords do not match</p>
        )}
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setValidPhoneNumber(validatePhoneNumber(e.target.value));
          }}
          required
        />
        {!validPhoneNumber && (
          <p className="error-message">
            Please enter a valid 10-digit phone number
          </p>
        )}

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
