import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (retypePassword && password !== retypePassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [password, retypePassword]);

  const validatePhoneNumber = (number) => {
    return /^\d{10}$/.test(number);
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
      setError("");
      setName("");
      setEmail("");
      setPassword("");
      setRetypePassword("");
      setPhoneNumber("");
      setAddress("");
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(""); // Clear any previous success messages
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2><b>Register</b></h2>
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Retype Password:</label>
        <input
          type="password"
          placeholder="Retype your password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          required
        />
        {!passwordsMatch && (
          <p style={{ color: "#dc3545" }}>Passwords do not match</p>
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
          <p className="error-message">Please enter a valid 10-digit phone number</p>
        )}

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
