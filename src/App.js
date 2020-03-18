import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cards from './component/Cards.js'
import Home from './component/Home.js'
import Cart from './component/Cart.js'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Cards} />
        <Route path="/cart" component={Cart} />
        </div>
      </Router>
    )
  }
}

export default App;
