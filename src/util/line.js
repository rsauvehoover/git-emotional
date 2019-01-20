import React from 'react';
import {Line} from 'react-chartjs-2';
import Sentimood from './sentiment/sentimood.js';

import Loader from 'react-loader-spinner';

class LinePlot extends React.Component {
  constructor(props) {
    super(props)
    this.data = {};
    this.options = {};
    this.sentimood = new Sentimood();
    this.timeStamps = [];
    this.commitMessages = [];
    this.sentimentValues = [];
    this.tags = {};
  }

  generateGraph() {
    this.RATE_OF_GROWTH = 0.5 //lower means faster growth
    this.NEGATIVE_IMPACT = 1 //higher means negative values cause larger drops
    this.data = {
      tags: this.tags,
      labels: this.timeStamps,
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
          metadata: this.commitMessages
        }
      ],
    };

    this.options = {
      legend:{
        display: false,
      },
      scales:{
        yAxes:[{ 
          display: false,
          gridlines: {
            display: false,
          },
          ticks: {
            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
        }
        }],
        xAxes:[{
          gridlines: {
            display: false,
          }
        }]
      },
      tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex].metadata[tooltipItem.index];
            }
        }
      }
      
    }
  }

  sigmoid(x){
    return Math.tanh(x);
    // return (1/(1 + Math.pow(Math.E, -x)))-0.5;
  }

  convertValues(L){

    var factor;
  
    for (var i = 1; i < L.length; i++) {
      console.log("Before: ", L[i]);
      if (L[i] > 0) {
        factor = this.RATE_OF_GROWTH;
      } else if (L[i] < 0) {
        factor = this.NEGATIVE_IMPACT;
      } else {
        factor = 0;
      }
      L[i] = L[i-1] + factor*this.sigmoid(L[i]);
      console.log("after: ", L[i]);
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

  filter(L) {
    var M = [];
    M[0] = L[0];
    M[L.length] = L[L.length];
    for (var i = 1; i < L.length-1; i++){
      M[i] = L[i-1]*0.242 + L[i]*0.399 + L[i+1]*0.242;
    }
    return M;
  }

  generateSentiment() {
      for (var i = 0; i < this.props.commits.length; i++) {
        this.sentimentValues.push(this.sentimood.analyze(this.props.commits[i][0]).score);
        this.timeStamps.push(this.props.commits[i][1]);
        this.commitMessages.push(this.props.commits[i][0]);
      }
      this.convertValues(this.sentimentValues);
      this.sentimentValues = this.filter(this.sentimentValues);
      for(var i = 0; i < this.sentimentValues.length; i++) {
        this.tags[this.sentimentValues[i]] = this.commitMessages[i];
      }
    }

  render() {
    if (this.props.commits.length > 0) {
      this.timeStamps = [];
      this.commitMessages = [];
      this.sentimentValues = [];
      this.generateSentiment();
      //this.sentimentValues = this.convertValues(this.sentimentValues);
      this.generateGraph();
      // this.data = {};
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
          <Loader type="TailSpin" color="#000000" heihgt={80} width={80}/>
        </div>
      );
    }
  }
};


export default LinePlot
