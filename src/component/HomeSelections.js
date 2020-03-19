import React, { Component } from 'react'
import HomeItems from './HomeItems.js'

class HomeSelections extends Component {
  constructor() {
    super()
    this.state = {
      selections: [
        {
          select: 'indoor',
          selectURL: 'https://cdn.shopify.com/s/files/1/0419/1525/products/brown-leather-duke-chelsea-1_1024x1024.JPG?v=1584114932'
        },
        {
          select: 'outdoor',
          selectURL: 'https://images.timberland.com/is/image/timberland/15551210-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0'
        },
        {
          select: 'style',
          selectURL: 'https://cdn.shopify.com/s/files/1/0419/1525/products/brown-leather-duke-chelsea-1_1024x1024.JPG?v=1584114932'
        },
        {
          select: 'womens',
          selectURL: 'https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_3.0,f_auto,q_auto/v1/i/5a004044_c5db.jpg'
        },
        {
          select: 'mens',
          selectURL: 'https://cdn.shopify.com/s/files/1/0048/2912/products/helm-boots-holt-dark-natural-13973389934654_345x550.progressive.jpg?v=1578690892'
        },

      ]
    }
  }
  render () {
    return (
      <div className="home-selections">
        {this.state.selections.map(({select, selectURL}) => (
          <HomeItems key={this.state.selections._id} select={select} selectURL={selectURL} />
        ))}
      </div>
    )
  }
}

export default HomeSelections
