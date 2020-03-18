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
        <nav>
          <h1>Boots</h1>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/sign">Sign Up</Link>
        </nav>
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
