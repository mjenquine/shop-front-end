import React, { Component } from 'react'

class HomeItems extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div style={{backgroundImage: `url(${this.props.selectURL})`}}>
        <h1>{this.props.select.toUpperCase()}</h1>
        <span><a href="/shop">SHOP NOW</a></span>
      </div>
    )
  }
}

export default HomeItems
