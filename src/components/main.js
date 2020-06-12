import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './home';
import AboutMe from './aboutMe';
import Contact from './contact';
import PrivacyPolicy from './privacyPolicy';

const Main = () => (
       <Switch>

    <Route exact path = "/" component = {Home} />
    <Route path = '/home' component = {Home} />
    <Route  path = '/aboutme' component = {AboutMe} />
    <Route  path = '/contact' component = {Contact} />
    <Route path = '/privacypolicy' component = {PrivacyPolicy} />


       </Switch>
);


export default Main;