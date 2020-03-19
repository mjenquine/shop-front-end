import React, {Component} from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://enigmatic-mountain-68507.herokuapp.com/'
}

baseURL = process.env.baseURL

class NewForm extends Component {
  constructor (props) {
  super (props)
  this.state = {
    name: '',
    price: '',
    description: '',
    img: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value })
  }
  async handleSubmit (event) {
    event.preventDefault()
    try {
      let response = await fetch(this.props.baseURL + '/shop', {
        method: 'POST',
        body: JSON.stringify({name: this.state.name, price: this.state.price, description: this.state.description, img: this.state.img}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      console.log(data);
      this.props.handleAddItem(data)
      this.setState({
        name: '',
        price: '',
        description: '',
        img: ''
      })
    } catch(e) {
      console.error({'Error': e})
    }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Item Name</label>
          <input type="text" className="form-control" id="name" onChange={this.handleChange} value={this.state.name} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" className="form-control" id="price" onChange={this.handleChange} value={this.state.price} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" onChange={this.handleChange} value={this.state.description} />
        </div>
        <div className="form-group">
          <label htmlFor="img">Image Address</label>
          <input type="text" className="form-control" id="img" onChange={this.handleChange} value={this.state.img} placeholder="http://"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit New Item</button>
      </form>
    )
  }
}

export default NewForm
