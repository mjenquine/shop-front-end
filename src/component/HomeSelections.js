import React, { Component } from 'react'
import HomeItems from './HomeItems.js'

class HomeSelections extends Component {
  constructor() {
    super()
    this.state = {
      selections: [
        {
          select: 'indoor',
          selectURL: 'https://huckberry.imgix.net/spree/products/462730/original/9uNW6rWBoJ_lems-shoes_boulder_boot_0_original.jpg?auto=format%2Ccompress&crop=top&fit=clamp&cs=tinysrgb&w=320&ixlib=react-9.0.1&h=320&w=320&q=50&dpr=2'
        },
        {
          select: 'outdoor',
          selectURL: 'https://huckberry.imgix.net/spree/products/470123/original/QvnHJ1BfIc_adidas_terrex_free_hiker_hiking-boots_0_original.jpg?auto=format%2Ccompress&crop=top&fit=clamp&cs=tinysrgb&w=320&ixlib=react-9.0.1&h=320&w=320&q=50&dpr=2'
        },
        {
          select: 'style',
          selectURL: 'https://huckberry.imgix.net/spree/products/471555/original/VIwOXve6wd_diemme_roccia_vet_hiking-boots_0_original.jpg?auto=format%2Ccompress&crop=top&fit=clamp&cs=tinysrgb&w=320&ixlib=react-9.0.1&h=320&w=320&q=50&dpr=2'
        },
        {
          select: 'trail',
          selectURL: 'https://huckberry.imgix.net/spree/products/468768/original/mYRxO6Gjim_diemme_cortina_hiking-boots_0_original.jpg?auto=format%2Ccompress&crop=top&fit=clamp&cs=tinysrgb&w=320&ixlib=react-9.0.1&h=320&w=320&q=50&dpr=2'
        },
        {
          select: 'dress',
          selectURL: 'https://huckberry.imgix.net/spree/products/434857/original/PErOOjPwsm_nisolo_andres_0_original.jpg?auto=format%2Ccompress&crop=top&fit=clamp&cs=tinysrgb&w=320&ixlib=react-9.0.1&h=320&w=320&q=50&dpr=2'
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
