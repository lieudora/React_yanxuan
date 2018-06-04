/*
入口JS
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom'

import Maison from './containers/maison/maison'
import Order from './containers/order/order'
import Chose from './containers/chose/chose'
import Classifier from './containers/classifier/classifier'
import Classright from './containers/classifier/classright/classright'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Footerguide from './components/footerguide/footerguide'
import '../src/assets/css/reset.styl'
import './components/footerguide/footerguide.styl'
import './mock/mockServer'

ReactDOM.render(
    <HashRouter>
      <div>
        <Switch>
          <Route path='/chose' component={Chose}/>
          <Route path='/order' component={Order}/>
          <Route path='/classifier' component={Classifier}/>
          <Route path='/classifier/classright' component={Classright}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Maison}/>
        </Switch>
        <Footerguide/>
      </div>
    </HashRouter>
  , document.getElementById('root'));

