import React, {Component} from 'react';
import NewForm from './New.js'
import '../index.css'
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://whispering-taiga-48290.herokuapp.com'
}



class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      show: false,
      cartItems: [],
      cartItem: {}
    }
    this.getItems = this.getItems.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.toggleAdmin = this.toggleAdmin.bind(this)
    this.getCartItems = this.getCartItems.bind(this)
    this.toggleAddToCart = this.toggleAddToCart.bind(this)
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

  toggleAdmin() {
    this.setState({show: !this.state.show})
  }

  async getCartItems(){
      try{
          let response = await fetch(`${baseURL}/shop`)
          let data = await response.json()
          this.setState({cartItems: data})
      }catch(e){
          console.error(e)
      }
  }

  async toggleAddToCart(item){
      try{
          const response = await fetch(`${baseURL}/shop/${item._id}`, {
              method: 'PUT',
              body: JSON.stringify({inCart: true}),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          const resJson = await response.json()
          console.log(resJson);
          const copyCartItems = [...this.state.cartItems]
          const foundIndex = this.state.cartItems.findIndex(thing => thing._id === resJson._id)
          copyCartItems[foundIndex].inCart = resJson.inCart
          this.setState({items: copyCartItems})
          console.log(this.state.items)
      } catch(e){
          console.error(e)
      }
  }

  render() {
    return (
      <div className="card-container-form">
        <div className="container card-container" >
          {this.state.items.map(item => {
            return (
              <div className="card index-card card-orient" style={{width: '18rem'}} key={item._id}>
                <img src={item.img} className="card-img-top" alt="" width="2" height="300"/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary" onClick={()=>{this.toggleAddToCart(item)}}>Add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
        <br/>
        <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {
          this.toggleAdmin()}} >Admin</button>
        {
          this.state.show
          ? <div>
              <br />
              <NewForm handleAddItem={this.handleAddItem} baseURL={baseURL}/>
            </div>
          : ''
        }
      </div>
    )
  }
}

export default Card
