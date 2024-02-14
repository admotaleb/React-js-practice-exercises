import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Count:0
    }
  }
  IncrimantNumber=() =>{
    this.setState({
      Count: this.state.Count+1
    })
    
  }
  DecrimantNumber=() =>{
    this.setState({
      Count: this.state.Count-1
    })
    
  }
  render() {
    return (
      <div>
        <h1>Count :{ this.state.Count}</h1>
        <Button variant="success" onClick={this.IncrimantNumber} disabled={this.state.Count===10? true:false}>Success</Button>{' '}
        <Button variant="warning" onClick={this.DecrimantNumber} disabled={this.state.Count===0? true:false}>Warning</Button>{' '}
      </div>
    )
  }
}
