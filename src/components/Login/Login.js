import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button, Welcome, Error } from "../AuthForms/AuthForms.js";
import { useAuth } from "../../context/Auth.js";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
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
        username: userName,
        password: password
      })
    }
    fetch('https://www.somePlace.com/auth/login', init) 
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
    console.log('Hey!')
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Welcome>Welcome to WoWMemo!
      </Welcome>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
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
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;