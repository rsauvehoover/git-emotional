import React, { Component }  from 'react';
import Sentimood from '../sentiment/sentimood.js';
import LinePlot from './line';


export default class StatPage extends Component {
  componentDidMount() {
    var sentimood = new Sentimood();
    // Example of a function using sentimood
    console.log(sentimood.analyze('this don\'t good'));

  }
  render() {
    return (
      <div>
        <div>Filler stuff</div>
        <div>
          <LinePlot />
        </div>
      </div>
      
    );
  }
}
