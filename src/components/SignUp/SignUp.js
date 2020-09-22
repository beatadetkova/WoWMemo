import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Card,
  Form,
  Input,
  Button,
  Welcome,
  Error,
} from '../AuthForms/AuthForms.js';
import { useAuth } from '../../context/Auth.js';

function Signup(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifPassword, setVerifPassword] = useState('');
  const { setAuthTokens } = useAuth();
  const referer = props.location.state ? props.location.state.referer : '/';

  function register() {
    if (password !== verifPassword) {
      setIsError(true);
      return;
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch('http://localhost:4000/auth/register', init)
      .then(async (res) => {
        if (res.status === 200) {
          const tokens = await res.json().then(JSON.parse);
          setAuthTokens(tokens);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        // TODO: this should display more relevant message like "Ups, something happend, please try again!"
        setIsError(true);
      });
  }

  // TODO: align logic between PrivateRoute and this component
  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Welcome>Welcome to WoWMemo!</Welcome>
      <Form>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Input
          type="password"
          value={verifPassword}
          onChange={(e) => {
            setVerifPassword(e.target.value);
          }}
          placeholder="password again"
        />
        <Button onClick={register}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      {isError && <Error>The password is not identical!</Error>}
    </Card>
  );
}

export default Signup;
