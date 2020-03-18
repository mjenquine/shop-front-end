import React, {Component} from 'react'
import CartItem from './CartItem'
import data from '../testData.js'

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount (){
        this.setState({items: data})
    }

    render(){
        return(
            <div className="cart">
                <table>
                    <tbody>
                    <thead>Item Table:</thead>
                        {this.state.items.map(item=>{
                            return(
                                <CartItem item={item} key={item.id}/>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart
