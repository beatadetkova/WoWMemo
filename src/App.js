import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./components/Home/Home.js";
import { AuthContext } from "./context/Auth.js";
import Login from "./components/Login/Login.js";
import Signup from './components/SignUp/SignUp.js';
import './App.css';

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (tokens) => {
    localStorage.setItem("jwt", tokens.jwt);
    setAuthTokens(tokens);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
