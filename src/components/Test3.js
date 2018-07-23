import React, { Component } from 'react';

class Test3 extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Content of Test3</h2>
        {this.props.children}
      </div>
    );
  }
}
export default Test3;
