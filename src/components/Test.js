import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div>
      <h2 align="center">Content of Test</h2>
      {this.props.children}
      </div>
    );
  }
}
export default Test;
