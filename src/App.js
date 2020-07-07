import React, { Component } from 'react';
import './App.css';
import Keys from './Compo/Keys';
import Ans from './Compo/Ans';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
    };
  }

  buttonClicked = buttonName => {
    if (buttonName === '=') {
      this.cal();
    } else if (buttonName === 'c') {
      this.reset();
    } else if (buttonName === 'CE') {
      this.backspace();
    } else {
      this.setState({ answer: this.state.answer + buttonName });
    }
  };

  cal = () => {
    try {
      // eslint-disable-next-line
      this.setState({ answer: eval(this.state.answer) + '' });
    } catch (e) {
      this.setState({ answer: 'Error' });
    }
  };
  reset = () => {
    this.setState({ answer: '' });
  };
  backspace = () => {
    this.setState({ answer: this.state.answer.slice(0, -1) });
  };

  render() {
    return (
      <div className='App'>
        <div className='calc'>
          <Ans answer={this.state.answer} />
    
          <Keys buttonClicked={this.buttonClicked} />
        </div>
      </div>
    );
  }
}

export default App;
