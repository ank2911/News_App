import React, { useState } from 'react';
import "../styles/Help.css";

const Help = () => {
    const[email,setEmail]=useState("")
    const[text,setText]=useState("")
    const[toggle,setToggle]=useState(true)
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const handleSubmit=()=>{
       setToggle(false)
    }
    const validatePhoneNumber = (number) => {
      return /^\d{10}$/.test(number);
    };
  return (
    toggle?
<div className="help-container">
      <form className="help-form" onSubmit={handleSubmit}>
        <h2><b>Help?</b></h2> 
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
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
        <label htmlFor="textarea">Description:</label>
        <textarea name="textarea" rows={4} cols={36}
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
        
        <button type="submit">Submit</button>
      </form>
    </div>:<div className="help-container">
    <h3>Connect With You Soon...</h3>
    </div>
  )
}

export default Help