import React from 'react';
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Service from './pages/service';
import Team from './pages/team';
import Dropdown from './pages/dropdown';



function App() {
  return (
    <Router>



<Switch>
  

<Route path="/dropdown"  component={Dropdown}/>
<Route path="/about"  component={About}/>
<Route path="/blog"  component={Blog}/>
<Route path="/contact"  component={Contact}/>
<Route path="/portfolio"  component={Portfolio}/>
<Route path="/service"  component={Service}/>
<Route path="/team"  component={Team}/>
  <Route path="/"  component={Home}/>
 
</Switch>

    </Router>
    

  
  );
}
export default App;

