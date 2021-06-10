import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/about">
          </Route>

          <Route path="/users">
          </Route>

          <Route path="/">
          </Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
