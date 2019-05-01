import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1FaceValue: 1,
      die2FaceValue: 1,
      rolling: false
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    this.setState({ die1FaceValue: Math.floor(Math.random() * 6) + 1 });
    this.setState({ die2FaceValue: Math.floor(Math.random() * 6) + 1 });
    this.setState({ rolling: true });

    // after sec set to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die facevalue={this.state.die1FaceValue} rolling={this.state.rolling}/>
          <Die facevalue={this.state.die2FaceValue} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.rollDice} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling ...' : 'Roll em!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
