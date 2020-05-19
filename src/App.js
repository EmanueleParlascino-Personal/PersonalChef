import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Menus from './Pages/Menus'
import About from './Pages/About'
import Navbar from 'react-bootstrap/Navbar'


// mess around flex to get a better result
function App() {
  return (
    <div className="App">
        <div>
        <img src = "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className = "top-right-img"/>
        <img src = "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className = "top-left-img"/>
        <img src = "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className = "bottom-right-img"/>
        <img src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className = "bottom-left-img"/>
        </div>
        <div class="topnav">
          <a><Link to = "/">   Home   </Link></a>
          <a><Link to = "/menus">  Menus  </Link></a>
          <a><Link to = "/about">  About    </Link></a>   
        </div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
        </Navbar>

        

      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/menus">
          <Menus />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
