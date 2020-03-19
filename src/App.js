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
        <div className="container">
<<<<<<< HEAD
        <nav>
          <h1>Boots</h1>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/sign">Sign Up</Link>
        </nav>
=======
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
>>>>>>> 3c92215c7a097417d7ac84863d98ad2d6f6d1ebb
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Cards} />
        <Route path="/cart" component={Cart} />
        <Route path="/sign" component={Sign} />
        </div>
      </Router>
    )
  }
}

export default App;
