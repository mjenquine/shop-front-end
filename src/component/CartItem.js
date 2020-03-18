import React, {Component} from 'react'
import Cart from './Cart'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://enigmatic-mountain-68507.herokuapp.com/'
}

class CartItem extends Component{

    constructor(state){
        super(state)
        this.state = {
            cartItem: {
                name: '',
                price: '',
                quantity: 0,
                description: ''
            }
        }
        // this.getItem = this.getItem.bind(this)
    }

    render(){
        return(
            <tr key={this.props.cartItem._id}>
                <td>Item: {this.props.cartItem.name}</td>

                <td>Price: ${this.props.cartItem.price}</td>
                <td>Quantity:
                    <button onClick={this.props.decreaseQty}> - </button>
                    {this.props.cartItem.quantity}
                    <button onClick={this.props.increaseQty}> + </button>
                </td>
                <td>description: {this.props.cartItem.description}</td>
                <td><button onClick={this.props.deleteItem}>DELETE</button></td>
            </tr>
        )
    }
}

export default CartItem
