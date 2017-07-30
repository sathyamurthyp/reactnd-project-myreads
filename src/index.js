import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, IndexRoute, browserHistory, Switch} from 'react-router-dom'

import App from './App'
import Search from './Search'
import './index.css'

ReactDOM.render((

	 <Router history={browserHistory}>
 		<Switch>
	     	<Route exact path="/" component={App}/>
	      	<Route path="/search" component={Search}/> 
	     </Switch>
  </Router>
)

	, document.getElementById('root'))
