import React, { useState } from 'react';
import { useEmbeddedWallet } from '@thirdweb-dev/react';

const Home = () => {
  const { connect, sendVerificationEmail } = useEmbeddedWallet();

  const preLogin = async (email) => {
    // send email verification code
    await sendVerificationEmail({ email });
  };
  const handleLogin = async (email, verificationCode) => {
    // verify email and connect
    await connect({
      strategy: 'email_verification',
      email,
      verificationCode,
    });
  };
  const [otp, setOtp] = useState(''); // Initialize state for storing OTP value
  const [email, setEmail] = useState(''); // Initialize state for storing email value

  const handleOtpChange = (event) => {
    // Update the state with the current OTP input value
    setOtp(event.target.value);
  };

  const handleEmailChange = (event) => {
    // Update the state with the current email input value
    setEmail(event.target.value);
  };

  const handleOtpButtonClick = () => {
    // Access the OTP value when the OTP button is clicked
    console.log('OTP:', otp);
    handleLogin(email, otp);
    // You can do further processing or store it wherever needed
  };

  const handleEmailButtonClick = () => {
    // Access the email value when the email button is clicked
    console.log('Email:', email);
    preLogin(email);
    // You can do further processing or store it wherever needed
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* OTP Input field */}
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        placeholder="Enter OTP"
        style={{
          marginBottom: '10px',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      {/* OTP Button */}
      <button
        onClick={handleOtpButtonClick}
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        verify OTP
      </button>

      {/* Email Input field */}
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter Email"
        style={{
          marginTop: '20px',
          marginBottom: '10px',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      {/* Email Button */}
      <button
        onClick={handleEmailButtonClick}
        style={{
          backgroundColor: '#28A745',
          color: '#fff',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Login by Email
      </button>
    </div>
  );
};

export default Home;
