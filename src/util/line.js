import React from 'react';
import {Line} from 'react-chartjs-2';

const RATE_OF_GROWTH = 10 //lower means faster growth
const NEGATIVE_IMPACT = 2 //higher means negative values cause larger drops

function sigmoid(x){
  return 1/(1 + Math.pow(Math.E, -x));
}

function convertValues(L){
  var cur = 0.5;
  for(var i = 0; i < L.length; i++){
    if(L[i] < 0){
      L[i] *= NEGATIVE_IMPACT
    }
    cur += L[i]/RATE_OF_GROWTH
    L[i] = sigmoid(cur)
    console.log(L[i])
  }
  return L;
}

var timeStamps = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
var sentimentValues = convertValues([3, 3, 2, 1, -3, 2, 1, 1, -1])

const data = {
  labels: timeStamps,
  datasets: [
    {
      label: 'My First dataset',
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
      data: sentimentValues,
    }
  ],
};

const options = {
  scales:{
    yAxes:[{
      ticks:{
        min: 0,
        max: 1,
      }
    }]
  }
}


export default class LinePlot extends React.Component {

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line
	  data={data}
	  options={options}
	/>
      </div>
    );
  }
};
