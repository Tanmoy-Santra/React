import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
// import app from '../firebase'; // firebase config file
import axios from 'axios';

// const auth = getAuth(app);

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    otp: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOTP = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => sendOTP(),
      });

      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, `+91${form.phone}`, appVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      toast.success('OTP sent successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!otpSent || !form.otp) {
      toast.error('Please verify phone number first.');
      return;
    }

    try {
      await confirmationResult.confirm(form.otp);

      const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCred.user, { displayName: form.name });

      await userCred.user.sendEmailVerification();

      // Send data to backend for JWT
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name: form.name,
        email: form.email,
        phone: form.phone,
      });

      dispatch(signupSuccess(res.data));
      toast.success('Signup successful! Please verify your email.');
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        {!otpSent ? (
          <button
            type="button"
            onClick={sendOTP}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded mb-4"
          >
            Send OTP
          </button>
        ) : (
          <>
            <input
              type="text"
              name="otp"
              value={form.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
              className="w-full mb-4 px-4 py-2 border rounded"
            />
          </>
        )}

        <div id="recaptcha-container"></div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
