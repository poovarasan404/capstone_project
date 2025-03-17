import React, { useContext } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import Login from './components/Login/Login';
import { UserProvider, UserContext } from '../src/context/UserContext';
import SignUp from './components/Signup/SignUp';


const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profiles" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

const Nav = () => {
  const { user, logout } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default App;
