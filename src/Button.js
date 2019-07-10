import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component{
  render(){
    const { text, link } = this.props;
    return (
      <Link to={link}>{text}</Link>)
  }
}

export default Button;