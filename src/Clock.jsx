import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
      flag: true
    }
  }

  getTime(currentDate) {
    const time = Date.parse(currentDate) - Date.parse(new Date());
    if(!isNaN(time)){
     const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60) % 60);
      const hours = Math.floor((time/(1000*60*60)) % 24);
      const days = Math.floor((time/(1000*60*60*24)));

      this.setState({ days, hours, minutes, seconds, flag: true });
    }
    else {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0, flag: false })
    }
  }

  componentWillMount() {
    this.getTime(this.props.currentDate);
  }

  componentDidMount() {
    setInterval(() => this.getTime(this.props.currentDate), 1000)
  }


  leading0(num) {
    return num < 10 ? '0' + num : num;
  }


  render() {
    return (
      <div>
      { this.state.flag === false
                        ? <div>Enter a valid Date</div>
                        : <div className="app-main">
                            <div>{this.leading0(this.state.days)} days </div>
                            <div>{this.leading0(this.state.hours)} hours </div>
                            <div>{this.leading0(this.state.minutes)} minutes </div>
                            <div>{this.leading0(this.state.seconds)} seconds</div>
                          </div>
      }
      </div>
    )
  }
}

export default Clock;
