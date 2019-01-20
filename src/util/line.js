import React from 'react';
import {Line} from 'react-chartjs-2';

import { connect } from 'react-redux';


class LinePlot extends React.Component {
  constructor(props) {
    super(props)
    this.data = {};
    this.options = {}
  }

  componentDidMount() {
    if (!(this.props.gh_data === [])) {
    }
    this.timeStamps = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    this.sentimentValues = this.convertValues([3, 3, 2, 1, -3, 2, 1, 1, -1])

    this.RATE_OF_GROWTH = 10 //lower means faster growth
    this.NEGATIVE_IMPACT = 2 //higher means negative values cause larger drops

    this.data = {
      labels: this.timeStamps,
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
          data: this.sentimentValues,
        }
      ],
    };

    this.options = {
      scales:{
        yAxes:[{
          ticks:{
            min: 0,
            max: 1,
          }
        }]
      }
    }
  }

  sigmoid(x){
    return 1/(1 + Math.pow(Math.E, -x));
  }

  convertValues(L){
    var cur = 0.5;
    for(var i = 0; i < L.length; i++){
      if(L[i] < 0){
        L[i] *= this.NEGATIVE_IMPACT
      }
      cur += L[i]/this.RATE_OF_GROWTH
      L[i] = this.sigmoid(cur)
    }
    return L;
  }

  render() {
    return (
      <div>
      <h2>Line Example</h2>
      <Line
        data={this.data}
        options={this.options}
      />
      </div>
    );
  }
};

const mapStateToProps = state => {
  const gh_data = state.updateGhRawData;
  return { gh_data };
}

export default connect(mapStateToProps)(LinePlot)
