import React, { Component } from 'react';

class Keys extends Component {
  buttonClicked = e => {
    this.props.buttonClicked(e.target.name);
  };
  render() {
    return (
      <div className='btn'>
        
        <button name='1' onClick={this.buttonClicked}>
          1
        </button>
        <button name='2' onClick={this.buttonClicked}>
          2
        </button>
        <button name='3' onClick={this.buttonClicked}>
          3
        </button>
        <button name='4' onClick={this.buttonClicked}>
          4
        </button>
        <button name='5' onClick={this.buttonClicked}>
          5
        </button>
        <button name='6' onClick={this.buttonClicked}>
          6
        </button>
        <button name='7' onClick={this.buttonClicked}>
          7
        </button>
        <button name='8' onClick={this.buttonClicked}>
          8
        </button>
        <button name='9' onClick={this.buttonClicked}>
          9
        </button>
        <button name='0' onClick={this.buttonClicked}>
          0
        </button>
        <button name='+' onClick={this.buttonClicked}>
          +
        </button>
        <button name='-' onClick={this.buttonClicked}>
          -
        </button>
        <button name='*' onClick={this.buttonClicked}>
          *
        </button>
        <button name='/' onClick={this.buttonClicked}>
          /
        </button>
        <button name='%' onClick={this.buttonClicked}>
          %
        </button>
        <button name='=' onClick={this.buttonClicked}>
          =
        </button>
        <button className='dot' name='.' onClick={this.buttonClicked}>
          .
        </button>
        <button name='CE' onClick={this.buttonClicked}>
          CE
        </button>

        <button className='clear' name='c' onClick={this.buttonClicked}>
          Clear
        </button>
      </div>
    );
  }
}

export default Keys;
