import React, { Component } from 'react';
import Navigation from './Navigation'

class Page1 extends Component{
  createUser(e){
    e.preventDefault();
    fetch("http://localhost:8081/api/user", {
      headers: {
          'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ name: Object.values(e.target)[0].value })
      })
      .then(res => res.json())
      .then(json => (json.name) ? alert(`User: ${json.name} is created`) : alert('Something is wrong'))
      .catch(err => err);
  }

  render(){
    return (
      <React.Fragment>
        <Navigation
          linkPrevious='/page3'
          linkNext='/page2'
        />
        <h2>Page 1.Create user</h2>
        <form onSubmit={this.createUser}>
          <input 
            name="userName"
            type="text"
            placeholder="User name"
            required
            />
          <button
            type="submit">Save
          </button> 
        </form>
      </React.Fragment>)
  }
}

export default Page1;