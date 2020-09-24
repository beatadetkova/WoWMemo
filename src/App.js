import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home/Home.js';
import { AuthContext } from './context/Auth.js';
import Login from './components/Login/Login.js';
import Signup from './components/SignUp/SignUp.js';
import './dist/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux/actions';

function App(props) {
  const dispatch = useDispatch();
  const [authTokens, setAuthTokens] = useState();
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    dispatch(addTask());
  }, [dispatch]);

  const setTokens = (tokens) => {
    localStorage.setItem('tokens', JSON.stringify(tokens));
    setAuthTokens(tokens);
  };

  const tokens = JSON.parse(localStorage.getItem('tokens'));

  if (!authTokens && tokens) {
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
