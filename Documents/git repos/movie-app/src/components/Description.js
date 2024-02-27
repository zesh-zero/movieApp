import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    return (
      <div>
        <div className='text-center'>
            This is a basic UI that uses an API call to fetch movie cover images searched for by the user. Additionally, the user is able to collect a list of favorites.
        </div>
        <div className='text-center'>
            Begin by typing something in the search box!
        </div>
      </div>
    )
  }
}
