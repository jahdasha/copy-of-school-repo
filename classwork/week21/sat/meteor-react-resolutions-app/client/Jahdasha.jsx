import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Jahdasha extends Component {
  setVar(){
    Session.set('test2', 'and the second button test!');
  }


  render() {
    return (
      <div>
      <h1>Jahdasha</h1>
      <button onClick={this.setVar}>test for the second button</button>
      </div>

    )
  }
}
