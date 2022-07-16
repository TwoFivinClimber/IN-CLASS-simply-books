import React from 'react';
import { Button } from 'react-bootstrap';
import User from '../components/User';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  console.warn(user);
  return (
    <>
      <User name={user.displayName} email={user.email} image={user.photoURL} lastLogin={user.metadata.lastSignInTime} />
      <Button type="button" onClick={signOut}>Sign Out</Button>
    </>
  );
}
