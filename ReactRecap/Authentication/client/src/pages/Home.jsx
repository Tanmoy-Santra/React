import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">🏡 Home</h2>
      <p className="mt-2">Welcome, {user?.name || "Guest"}!</p>
    </div>
  );
};

export default Home;
