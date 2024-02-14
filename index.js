import React, { Component } from 'react';
import LoginPage  from './LoginPage';
import HomePage from './HomePage';

 class Conditional_rendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  
  render() {
    if(this.state.isLoggedIn){
      return (
        <div>
          {this.state.isLoggedIn? LoginPage : HomePage}
          <LoginPage/>
        </div>
      )
    }
    else{
      return (
        <div>
         <HomePage/>
        </div>
      )
    }
    
  }
}
export default Conditional_rendering