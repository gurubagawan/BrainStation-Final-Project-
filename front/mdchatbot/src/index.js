import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Gender from './gender';
import Age from './age';
import Bodyparts from './bodyparts'; 
import Sublocation from './sublocations'; 

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
            <Route path="age" component={Age} />
            <Route path='gender' component={Gender} />
            <Route path='bodyparts' component= {Bodyparts}/>
            <Route path ='sublocation' component={Sublocation}/>
        </Route>
    </Router>
), document.getElementById('root'));
//registerServiceWorker();
