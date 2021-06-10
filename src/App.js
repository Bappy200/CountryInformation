import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/:id'>
          <CountryDetails></CountryDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
