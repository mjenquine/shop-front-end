import React, {Component} from 'react';

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://enigmatic-mountain-68507.herokuapp.com/'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.getItems = this.getItems.bind(this)
  }

  componentDidMount(){
    this.getItems()
  }

  async getItems () {
    try {
      let response = await fetch(`${baseURL}/shop`)
      let data = await response.json()
      this.setState({items: data})
    } catch(e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className="container">
      <nav>Test</nav>
        <h1>Hi</h1>
        {this.state.items.map(item => {
          return (
            <div key={item._id}>
              {item.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
