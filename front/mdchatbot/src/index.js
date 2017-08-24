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
import PartSymptoms from './partsymptoms'; 
import Diagnosis from './diagnosis'
import {Button, Icon} from 'react-materialize'
import Home from './home'
export default () => (
	<Button waves='light'>
		<Icon>thumb_up</Icon>
	</Button>
)


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Gender} />
            <Route path="age" component={Age} />
            <Route path='bodyparts' component= {Bodyparts}/>
            <Route path='sublocation/:id' component={Sublocation}/>
            <Route path='bodypartsymptoms/:id' component = {PartSymptoms} />
            <Route path= 'diagnosis'component= {Diagnosis}/>
        </Route>
    </Router>
), document.getElementById('root'));
//registerServiceWorker();
