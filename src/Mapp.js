import React from 'react';
import Home from './components/Home';

import Main1 from './components/Main1'
import Profile from './components/Profile';
import Register from './components/Register'
import Login from './components/Login'
import Profile1 from './components/Profile1'

import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Userprofile from './components/Userprofile';
import Register2 from './components/Register2'
import Ngo from './components/Ngo'






function Mapp() {
  return (
 
<div>
    <Router>
    
  
    <Switch>
     <Route path="/" exact component={Home} />
     
    
     <Route path="/register" component={Register}/>
     <Route path="/login" component={Login}/>
     <Route path="/main1" component={Main1} />
     <Route path="/profile1" component={Profile1} />
     <Route path ="/main" component={Main} />
     <Route path = "/profile" component={Profile} />
     <Route path ="/Userprofile" component={Userprofile} />
     <Route path ="/register2" component={Register2} />
     <Route path ="/ngo" component={Ngo} />
    

     
     </Switch>
  
  </Router>
  </div>
  
  );
}

export default Mapp;
