import React, {Component} from 'react'
import CartItem from './CartItem'
// import data from '../testData.js'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://enigmatic-mountain-68507.herokuapp.com/'
}

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartItems: [],
            cartItem: {}
        }
        this.getItems = this.getItems.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    async getItems(){
        try{
            let response = await fetch(`${baseURL}/shop`)
            let data = await response.json()
            this.setState({cartItems: data})
        }catch(e){
            console.error(e)
        }
    }

    async deleteItem(id){
        fetch(`${baseURL}/shop/` + id, {
            method: 'DELETE'
        }).then(response => {
            const findIndex = this.state.cartItems.findIndex(cartItem =>
            cartItem._id === id)
            const copyCartItems = [...this.state.cartItems]
            copyCartItems.splice(findIndex, 1)
            this.setState({cartItems: copyCartItems})
        })
    }

    componentDidMount (){
        this.getItems()
    }

    render(){
        return(
            <div className="cart">
                <table>
                    <tbody>
                    <thead>Item Table:</thead>
                        {this.state.cartItems.map((item, index) => (
                            <CartItem cartItem={item} key={item._id} deleteItem={this.deleteItem}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart
