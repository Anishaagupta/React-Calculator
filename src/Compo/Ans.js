import React, { Component } from 'react';

class Ans extends Component {
  render() {
    const { answer } = this.props;
    return (
      <div className='result'>
        <p>{answer}</p>
      </div>
    );
  }
}

export default Ans;
