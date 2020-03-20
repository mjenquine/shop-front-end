import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cards from './component/Cards.js'
import Home from './component/Home.js'
import Cart from './component/Cart.js'
import Sign from './component/Sign.js'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="jumbotron jumbotron-fluid bg-dark text-white">
            <div className="container">
              <h1 className="text-white display-4">STOMPING GROUNDS</h1>
              <p className="text-light lead">premium boot retailer for all elements</p>
            </div>
          </div>
        <ul className="nav nav-tabs align-items-center justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Cards} />
        <Route path="/cart" component={Cart} />
        </div>
      </Router>
    )
  }
}

export default App;
