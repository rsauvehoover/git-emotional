import React from 'react';
import {Line} from 'react-chartjs-2';
import Sentimood from './sentiment/sentimood.js';

class LinePlot extends React.Component {
  constructor(props) {
    super(props)
    this.data = {};
    this.options = {};
    this.sentimood = new Sentimood();
    this.timeStamps = [];
    this.commitMessages = [];
    this.sentimentValues = [];
  }

  generateGraph() {
    this.RATE_OF_GROWTH = 2.3 //lower means faster growth
    this.NEGATIVE_IMPACT = 5 //higher means negative values cause larger drops
    this.data = {
      labels: this.commitMessages,
      datasets: [
        {
          label: this.props.gh_url,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.sentimentValues,
        }
      ],
    };

    this.options = {
      scales:{
        // yAxes:[{
        //   ticks:{
        //     min: -10,
        //     max: 10,
        //   }
        // }]
      }
    }
  }

  sigmoid(x){
    return (1/(1 + Math.pow(Math.E, -x)))-0.5;
  }

  convertValues(L){
    var cur = 0;
    var factor;
    var prev;
    
    for (var i = 1; i < L.length; i++) {
      if (L[i] > 0) {
        factor = this.RATE_OF_GROWTH;
      } else {
        factor = this.NEGATIVE_IMPACT;
      }
      L[i] = L[i-1] + factor*this.sigmoid(L[i]);
    }
    // for(var i = 0; i < L.length; i++){
    //   if (i = 0) {
    //     prev = 0;
    //   } else {
    //     prev = L[i-1];
    //   }
    //   if(L[i] < 0){
    //     factor = this.NEGATIVE_IMPACT;
    //     // L[i] *= this.NEGATIVE_IMPACT
    //   } else {
    //     factor = this.RATE_OF_GROWTH;
    //     // cur += L[i]/this.RATE_OF_GROWTH
    //   }
    //   L[i] = prev+(this.sigmoid(cur)*factor);
    // }
    return L;
  }

  generateSentiment() {
      for (var i = 0; i < this.props.commits.length; i++) {
        this.sentimentValues.push(this.sentimood.analyze(this.props.commits[i][0]).score);
        this.timeStamps.push(this.props.commits[i][1]);
        this.commitMessages.push(this.props.commits[i][0]);
      }
      this.convertValues(this.sentimentValues);
      
    }

  render() {
    if (this.props.commits.length > 0) {
      this.generateSentiment();
      //this.sentimentValues = this.convertValues(this.sentimentValues);
      this.generateGraph();
      // this.data = {};
      this.timeStamps = [];
      this.commitMessages = [];
      this.sentimentValues = [];
      return (
        <div>
        <h2>{this.props.gh_url}</h2>
        <Line
        data={this.data}
        options={this.options}
        />
        </div>
      );
    }
    else{
      return(
        <div>
        </div>
      );
    }
  }
};


export default LinePlot
