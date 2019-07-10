import React, { Component } from 'react';
import Button from './Button'
import './Navigation.css';

class Navigation extends Component{
  render(){
    const { linkPrevious, linkNext } = this.props;
    return (<div className='navigation'>
      <Button 
        text='<'
        link={linkPrevious}
      />
      <Button 
        text='>'
        link={linkNext}
      />
    </div>) 
  }
}

export default Navigation;