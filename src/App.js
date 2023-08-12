import React, { useEffect, useState } from 'react';
import Navigation from './routes-navbar/Navigation';
import Routes from './routes-navbar/Routes';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from 'jsonwebtoken';
import JoblyApi from './api';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './auth/UserContext';
import Loading from './helpers/Loading';

/** Key name for token stored in localStorage for re-login */
export const STORED_TOKEN = 'secret-token';

function App() {
  const [data, setData] = useState(false);
  const [applicationId, setApplicationId] = useState(new Set([]));
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(STORED_TOKEN);

  useEffect(() => {
    async function getCurrUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;

          let currUser = await JoblyApi.getCurrUser(username);
          setCurrUser(currUser);
          setApplicationId(new Set(currUser.applications));
        }
        catch (e) {
          setCurrUser(null);
        }
      }
      setData(true);
    }

    setData(false);
    getCurrUser();
  }, [token])

  /** Log out */
  const logout = () => {
    setCurrUser(null);
    setToken(null);
  }

  /** Sign up */
  const signup = async (signupInfo) => {
    try {
      let token = await JoblyApi.signup(signupInfo);
      setToken(token);
      return { success: true }
    } catch (errors) {
      return { success: false, errors }
    }
  }

  /** Log in */
  const login = async (loginInfo) => {
    try {
      let token = await JoblyApi.login(loginInfo);
      setToken(token);
      return { success: true }
    } catch (errors) {
      return { success: false, errors }
    }
  }

  /** Check if job has been applied */

  const hasApplied = (id) => {
    return applicationId.has(id);
  }

  /** Apply to job */
  const applyToJob = (id) => {
    if (hasApplied(id)) return;
    JoblyApi.applyToJob(currUser.username, id);
    setApplicationId(new Set([...applicationId, id]));
  }

  if (!data) return <Loading />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser, hasApplied, applyToJob }}>
        <div className='App'>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
