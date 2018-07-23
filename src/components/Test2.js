import React, { Component } from 'react';

class Test2 extends Component {
  render() {
    return (
      <div>
      <h2 align="center">Content of Test2</h2>
      {this.props.children}
      </div>
    );
  }
}
export default Test2;
