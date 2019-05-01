import React, { Component } from 'react';

class Die extends Component {
  setClass(dieVal) {
    let num;
    if (dieVal === 1) {
      num = 'one';
    } else if (dieVal === 2) {
      num = 'two';
    } else if (dieVal === 3) {
      num = 'three';
    } else if (dieVal === 4) {
      num = 'four';
    } else if (dieVal === 5) {
      num = 'five';
    } else {
      num = 'six'
    }
    return `fas fa-dice-${num}`;
  }
  render() {
    return (
      <div className="Die">
        <i className={this.setClass(this.props.facevalue)}></i>
      </div>
    )
  }
}

export default Die;