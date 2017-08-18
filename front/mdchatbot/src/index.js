import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Gender from './firstq'; 
import Age from './age'; 

ReactDOM.render( (
  <Router history={browserHistory}>
    <Route songs={Gender} path="/" component={App}>
      <IndexRoute component={Gender} />
      <Route path="age" component={Age} />
      <Route path="gender" component={Gender} />
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
