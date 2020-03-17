import React, {Component} from 'react';
import Cards from './component/Cards.js'
import Home from './component/Home.js'
import Cart from './component/Cart.js'


class App extends Component {

  render() {
    return (
      <div className="container">
      <Home />
      <Cart />

      <Cards />


      </div>
    )
  }
}

export default App;
