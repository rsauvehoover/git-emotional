import React, { Component }  from 'react';
import Sentimood from '../sentiment/sentimood.js';

export default class StatPage extends Component {
  componentDidMount() {
    var sentimood = new Sentimood();
    // Example of a function using sentimood
    console.log(sentimood.mood('this don\'t good'));
  }
  render() {
    return (
      <div>Filler stuff</div>
    );
  }
}
