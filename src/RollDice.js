import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1FaceValue: 1,
      die2FaceValue: 1
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    this.setState({ die1FaceValue: Math.floor(Math.random() * 6) + 1 });
    this.setState({ die2FaceValue: Math.floor(Math.random() * 6) + 1 });
  }

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die facevalue={this.state.die1FaceValue} />
          <Die facevalue={this.state.die2FaceValue} />
        </div>
        <button onClick={this.rollDice}>Roll Em</button>
      </div>
    );
  }
}

export default RollDice;
