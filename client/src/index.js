import React from 'react';
import ReactDom from 'react-dom';
import AppContainer from "./app_container";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

ReactDom.render(
  <Router>
    <Route render={(props) => <AppContainer {...props} />} />
  </Router>,
  document.getElementById("app")
);