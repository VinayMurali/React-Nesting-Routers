import React, { Component } from 'react';

class Test1 extends Component {
  render() {
    return (
      <div>
      <h2 align="center">Content of Test1</h2>
      {this.props.children}
      </div>
    );
  }
}
export default Test1;
