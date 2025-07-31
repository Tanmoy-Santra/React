import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
  const { userId } = useParams(); // get the dynamic route Param

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">User ID:
{userId}</h1>
    </div>
  );
};
export default User;