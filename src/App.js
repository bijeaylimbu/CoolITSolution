import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

import Team from "./components/pages/Team";
import Blog from './components/pages/Blog';
import Whatwedo from "./components/pages/Whatwedo";
import Contact from "./components/pages/Contact";
import Blog1 from './components/Blog/Blog1';
import Blog2 from './components/Blog/Blog2';
import Blog3 from './components/Blog/Blog3';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>

    <Router>
      
      <Navbar/>
      <Switch>

        <Route path="/" exact component={Home} />
        
        <Route path="/team"  component={Team}/>
        <Route path="/blog"  component={Blog}/>
        <Route path="/blog1"  component={Blog1}/>
        <Route path="/blog2"  component={Blog2}/>
        <Route path="/blog3"  component={Blog3}/>
        
        <Route path="/what we do" component={Whatwedo}/>
        <Route path="/team" component={Team}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
