import React, { Component }  from 'react';
import ReturnToSubmitButton from '../components/returnToSubmitButton.js';

export default class StatPage extends Component {
  render() {
    return (
      <div>
        <ReturnToSubmitButton></ReturnToSubmitButton>
        <div>Filler stuff</div>
      </div>
    );
  }
}
