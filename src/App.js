import React, { Component } from 'react';

import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: 'January 1, 2018',
      updatedDate: ''
    }
  }

  changeDay(updatedDate) {
    this.setState({ currentDate: updatedDate });
  }

  render() {
    // console.log(this.state.updatedDate);
    return (
      <div className="app">
        <div className="app-title">
          How far is {this.state.currentDate}
        </div>
        <Clock
          currentDate={this.state.currentDate}
        />
        <div className="app-input">
          <input
            placeholder="Enter a new Date"
            type="text"
            onChange={event => this.setState({updatedDate: event.target.value})}
            onKeyPress={event => event.key === 'Enter' ? this.changeDay(this.state.updatedDate) : <div></div>}
          />
        </div>
      </div>
    )
  }
}

export default App;
