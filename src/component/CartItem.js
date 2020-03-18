import React, {Component} from 'react'

class CartItem extends Component{
    render(){
        return(
            <tr key={this.props.item.id}>
                <td>Item: {this.props.item.name}</td>

                <td>Price: ${this.props.item.price}</td>
                <td>Quantity:
                    <a href="#">-</a>
                    {this.props.item.quantity}
                    <a href="#">+</a>
                </td>
                <td>description: {this.props.item.description}</td>
                <td><button>DELETE</button></td>
            </tr>
        )
    }
}

export default CartItem
