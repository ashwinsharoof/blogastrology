import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import About  from './About.js';
import Contact  from './Contact.js';
import admincontact from './admincontact';
import adminlogin from './adminlogin';
import adminhome from './adminhome'
import blogcontent from './blogcontent'
import Protectedrouter from './protected'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div>
        <nav className="navbar navbar-danger">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Sakthi Astro</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    
  </div>
</nav>

    
    <Route path="/" exact component={Home}/>
    <Route path="/about" exact component={About}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/adminlogin" exact component={adminlogin}/>
    <Route path="/blogcontent" exact component={blogcontent} />
    <Protectedrouter exact path="/adminhome" exact component ={adminhome}/>
    <Protectedrouter  exact path="/admincontact" exact component={admincontact}   />
    </div>
 </BrowserRouter>
      
    )
  }
  
}

export default App;
