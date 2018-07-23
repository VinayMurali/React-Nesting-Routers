import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Test from './components/Test';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';

import {Router,browserHistory} from 'react-router';


const Greeting =()=>{
  return <div>Hello there!!</div>
}

export default (
<Route>
  <Route path="/" component={App}>
    <Route path="/greet" component={Greeting} />
    <Route path="/greet1" component={Greeting} />
    <Route path="/greet2" component={Greeting} />
  </Route>
  <Route path="/test" component={Test}>
    <Route path="/test1" component={Test1} />
    <Route path="/test2" component={Test2} />
    <Route path="/test3" component={Test3} />
  </Route>
</Route>
);
