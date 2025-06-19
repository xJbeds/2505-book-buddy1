import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Account = () => {
  const { token, user } = useAuth();

  if (!token) {
    return <p>Please log in to view your account.</p>;
  }

  return (
    <section>
      <h2>Account Details</h2>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Name:</strong> {user?.name}</p>
    </section>
  );
};

export default Account;