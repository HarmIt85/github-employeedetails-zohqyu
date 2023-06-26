import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import EmployeeDetails from './EmployeeDetails';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/employeedetails">
          <EmployeeDetails />
        </Route>
        <Route path="*">
          <div>Page Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
