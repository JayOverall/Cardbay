import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">

              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
                        <Footer />
             </div>
       </BrowserRouter>

    );
  }
}

export default App;
