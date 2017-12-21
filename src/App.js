import React, { Component } from 'react';

import Clock from './Clock';

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
          How far is, {this.state.currentDate}
        </div>
        <Clock
          currentDate={this.state.currentDate}
        />
        <div>
          <input
            placeholder="Enter a new Date"
            type="text"
            onChange={(event) => this.setState({updatedDate: event.target.value})}
          />
          <button onClick={() => this.changeDay(this.state.updatedDate)}>Update</button>
        </div>
      </div>
    )
  }
}

export default App;
