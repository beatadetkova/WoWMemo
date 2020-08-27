import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button, Welcome, Error } from "../AuthForms/AuthForms.js";
import { useAuth } from "../../context/Auth.js";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = props.location.state ? props.location.state.referer : '/';

  function postLogin() {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }
    fetch('http://localhost:4000/signin', init) 
    .then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
  
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      console.log('hey!')
      postLogin();
    }
  };

  return (
    <Card>
      <Welcome>Welcome to WoWMemo!
      </Welcome>
      <Form>
        <Input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          onKeyDown={handleKeyDown}
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The email or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;