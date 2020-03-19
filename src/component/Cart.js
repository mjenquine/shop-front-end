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
        // this.deleteItem = this.deleteItem.bind(this)
        this.increaseQty = this.increaseQty.bind(this)
        this.decreaseQty = this.decreaseQty.bind(this)
        // this.removeItem = this.removeItem.bind(this)
        this.toggleInCart = this.toggleInCart.bind(this)
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

    // async deleteItem(id){
    //     fetch(`${baseURL}/shop/` + id, {
    //         method: 'DELETE'
    //     }).then(response => {
    //         const findIndex = this.state.cartItems.findIndex(cartItem =>
    //         cartItem._id === id)
    //         const copyCartItems = [...this.state.cartItems]
    //         copyCartItems.splice(findIndex, 1)
    //         this.setState({cartItems: copyCartItems})
    //     })
    // }

    toggleInCart(item){
        this.setState({inCart: !this.state.inCart})
        console.log(item);
    }

    async increaseQty(item){
        const newQty = parseInt(item.quantity, 10) +1
        try{
            const response = await fetch(`${baseURL}/shop/${item._id}`, {
                method: 'PUT',
                body: JSON.stringify({quantity: newQty}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const resJson = await response.json()
            const copyCartItems = [...this.state.cartItems]
            const foundIndex = this.state.cartItems.findIndex(thing => thing._id === resJson._id)
            copyCartItems[foundIndex].quantity = resJson.quantity
            this.setState({cartItems: copyCartItems})
        } catch(e){
            console.error(e)
        }
    }

    async decreaseQty(item){
        const newQty = parseInt(item.quantity, 10) -1
        if(newQty < 0){
            alert('Negative Quantity is invalid!')
        } else{
            try{
                const response = await fetch(`${baseURL}/shop/${item._id}`, {
                    method: 'PUT',
                    body: JSON.stringify({quantity: newQty}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const resJson = await response.json()
                const copyCartItems = [...this.state.cartItems]
                const foundIndex = this.state.cartItems.findIndex(thing => thing._id === resJson._id)
                copyCartItems[foundIndex].quantity = resJson.quantity
                this.setState({cartItems: copyCartItems})
            } catch(e){
                console.error(e)
            }
        }
    }

    componentDidMount (){
        this.getItems()
    }

    render(){
        return(
            <div className="cart">
                <br></br>
                <br></br>
                <table className="table">

                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.cartItems.map((item, index) => (
                            item.inCart
                            ? <CartItem cartItem={item} key={item._id} deleteItem={this.deleteItem} increaseQty={() => {this.increaseQty(item)}} decreaseQty={() => {this.decreaseQty(item)}} toggleInCart={()=>{this.toggleInCart(item)}}/>
                            : ''
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart
