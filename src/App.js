import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home/Home';

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
            <Home/>
          </Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
