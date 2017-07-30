import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router'

const Routes = () => (
  <Router>
 
      <Route exact path="/" component={App}/>
      <Route path="/search" component={Search}/> 

  </Router>
)

export default Routes