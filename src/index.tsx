import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import Members from './pages/Members';
import Career from './pages/Career';

const index = (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/career" component={Career} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(index, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
