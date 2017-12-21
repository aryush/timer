import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0'
    }
  }

  getTime(currentDate) {
    const time = Date.parse(currentDate) - Date.parse(new Date());

    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor((time/(1000*60*60)) % 24);
    const days = Math.floor((time/(1000*60*60*24)));

    this.setState({ days, hours, minutes, seconds });
  }

  componentWillMount() {
    this.getTime(this.props.currentDate);
  }

  componentDidMount() {
    setInterval(() => this.getTime(this.props.currentDate), 1000)
  }

  render() {
    return (
      <div className="app-main">
        <div>{this.state.days} days, </div>
        <div>{this.state.hours} hours, </div>
        <div>{this.state.minutes} minutes, </div>
        <div>{this.state.seconds} seconds</div>
      </div>
    )
  }
}

export default Clock;
