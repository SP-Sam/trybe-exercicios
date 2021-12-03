import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props;

    if (username === 'joão' && password === '1234') {
      return <p>Welcome joão!</p>
    }

    alert('Access denied');
    return <Redirect to="/"/>
    
  }
}

export default StrictAccess;