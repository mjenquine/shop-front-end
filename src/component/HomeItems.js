import React, { Component } from 'react'

class HomeItems extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="menu-item">
        <div className="backgroundImage" style={{backgroundImage: `url(${this.props.selectURL})`}}>
        </div>
        <div className="content">
          <h1 className="title">{this.props.select.toUpperCase()}</h1>
          <span className="subtitle"><a href="/shop">SHOP NOW</a></span>
        </div>
      </div>
    )
  }
}

export default HomeItems
