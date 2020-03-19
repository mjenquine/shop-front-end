import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cards from './component/Cards.js'
import Home from './component/Home.js'
import Cart from './component/Cart.js'
import New from './component/New.js'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new">New</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Cards} />
        <Route path="/cart" component={Cart} />
        <Route path="/new" component={New} />
        </div>
      </Router>
    )
  }
}

export default App;
