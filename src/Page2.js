import React, { Component } from 'react';
import Navigation from './Navigation'

class Page2 extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:8081/api/users")
      .then(res => res.json())
      .then(json => this.setState({ users: json }))
      .catch(err => err);
  }

  render(){
    return (
      <React.Fragment>
        <Navigation
          linkPrevious='/page1'
          linkNext='/page3'
        />
        <h2>Page 2.Users</h2>
        <ul>
          { 
            Object.values(this.state.users).map(user => {
              return (<li key={user._id}>{user.name}</li>)
            })
          }
        </ul>
      </React.Fragment>)
  }
}

export default Page2;