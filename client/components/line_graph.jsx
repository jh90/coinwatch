import React from 'react';
import { Chart } from 'react-d3-core';
import { LineChart } from 'react-d3-basic';

const propTypes = {
  lines: React.PropTypes.array,
};

export default class LineGraph extends React.Component {
  constructor () {
    super();
    this.state = {
      series: [],
    };
  }

  componentDidMount () {
    console.log(this.props.lines);
    const outputs = Object.keys(this.props.lines[0]);
    const dataSeries = outputs.map((sym) => {
      return {
        field: sym,
        color: this.getRandomColor(),
      };
    });
    this.setState({series: dataSeries,});
  }

  getRandomColor () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  xFunc (d) {
    return d.index;
  }

  yFunc (d) {
    return d;
  }

  render () {
    return (
      <div>
        <Chart width={960}
               height={500} >
          <LineChart
            data={this.props.lines}
            chartSeries={this.state.series}
            />
        </Chart>
      </div>
    );
  }
}

LineGraph.propTypes = propTypes;
