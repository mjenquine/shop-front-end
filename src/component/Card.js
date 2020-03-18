import React, {Component} from 'react';
import NewForm from './New.js'
import '../index.css'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://enigmatic-mountain-68507.herokuapp.com/'
}

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.getItems = this.getItems.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
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

  handleAddItem(item) {
    const copyItems = [item, ...this.state.items]
    this.setState({
      items: copyItems
    })
  }


  render() {
    return (
      <div className="card-container-form">
        <div className="container card-container" >
          {this.state.items.map(item => {
            return (
              <div className="card index-card" style={{width: '18rem'}} key={item._id}>
                <img src={item.img} className="card-img-top" alt="" width="2" height="300"/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}

export default Card


// <div>
//   <NewForm handleAddItem={this.handleAddItem} baseURL={baseURL}/>
// </div>
