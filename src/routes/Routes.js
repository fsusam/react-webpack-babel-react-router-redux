import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import App from '../components/todo';

let Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/todo" component={App} />
    </Switch>
    );    
  };

  export default Routes;