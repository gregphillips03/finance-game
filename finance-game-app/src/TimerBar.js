import React from 'react';

class TimerBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: props.duration,
      elapsed: 0
    }
    this.interval = null;
  }
  
  componentDidMount() {
    this.last = performance.now()
    this.interval = setInterval(() => {
      this.setState(state => {
        
        if (this.props.paused) {
          this.last = performance.now()
          return
        }
        
        let now = performance.now()
        let elapsed = state.elapsed + (now - this.last)
        this.last = now
        
        if (elapsed >= state.duration) {
          if (this.props.onComplete) {
            this.props.onComplete()
          }
          return { elapsed: 0 }
        } else {
          return { elapsed }
        }        
      })
    }, 100)
  }
  
  render() {
    return (
      <div className="timer-bar" style={this.props.style}>
        <span style={{
            width: (100 * this.state.elapsed / this.state.duration) + '%', 
              height: '100%' }}>
        </span>
      </div>
    )
  }
  
}

export default TimerBar; 