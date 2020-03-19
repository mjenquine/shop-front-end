import React, {Component} from 'react'

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
                <td>{this.props.cartItem.name}</td>

                <td>${this.props.cartItem.price}</td>
                <td>
                    <button class="btn btn-outline-dark btn-sm" onClick={this.props.decreaseQty}> - </button>
                     {this.props.cartItem.quantity}
                    <button class="btn btn-outline-dark btn-sm" onClick={this.props.increaseQty}> + </button>
                </td>
                <td>{this.props.cartItem.description}</td>
                <td><button className="btn btn-outline-secondary btn-sm" onClick={this.props.toggleInCart}>REMOVE ITEM</button></td>
            </tr>
        )
    }
}

export default CartItem
