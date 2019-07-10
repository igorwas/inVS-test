import React, { Component } from 'react';
import Navigation from './Navigation'

class Page3 extends Component{
  render(){
    return (
      <React.Fragment>
        <Navigation
          linkPrevious='/page2'
          linkNext='/page1'
        />
        <h2>Page 3</h2>
      </React.Fragment>)
  }
}

export default Page3;