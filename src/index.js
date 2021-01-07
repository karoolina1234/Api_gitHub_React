import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Contributions from './Contributions';
import Issues from './Issues';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/contributions" component={Contributions} />
      <Route path="/issues" component={Issues} />
  </Switch>
</ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
