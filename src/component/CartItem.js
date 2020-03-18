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

    // componentDidMount(){
    //     // this.getItem()
    // }

    // async getItem(){
    //     try{
    //         let response = await fetch(`${baseURL}/shop/${this.props.cartItem._id}`)
    //         let data = await response.json()
    //         this.setState({item:data})
    //         console.log(this.props.cartItem)
    //     } catch(e){
    //         console.error(e)
    //     }
    // }


    render(){
        return(
            <tr key={this.props.cartItem._id}>
                <td>Item: {this.props.cartItem.name}</td>

                <td>Price: ${this.props.cartItem.price}</td>
                <td>Quantity:
                    <a href="#">-</a>
                    {this.props.cartItem.quantity}
                    <a href="#">+</a>
                </td>
                <td>description: {this.props.cartItem.description}</td>
                <td><button>DELETE</button></td>
            </tr>
        )
    }
}

export default CartItem
