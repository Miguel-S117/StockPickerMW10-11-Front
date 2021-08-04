import './App.css';
import Navigation from './components/Navigation';
import LandingPage from './views/LandingPage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/Match">
          {/* Match component */}
        </Route>
        <Route path="/Home">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;