import React from 'react';
import { Button } from '../AuthForms/AuthForms.js';
import { useAuth } from '../../context/Auth.js';

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;
