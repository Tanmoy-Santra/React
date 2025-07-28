import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/authSlice';
import { setuser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setuser(form))
      .unwrap()
      .then(() => toast.success('Logged in successfully!'))
      .catch(() => toast.error('Login failed!'));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5">
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="mb-4 w-full p-2 border" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="mb-4 w-full p-2 border" />
      {/* CAPTCHA component goes here */}
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
    </form>
  );
};

export default Login;
