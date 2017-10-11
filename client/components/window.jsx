import React from 'react';
import DataHelper from '../helpers/data_helper.js';

import LineGraph from './line_graph.jsx';

const propTypes = {
  graphParams: React.PropTypes.object,
};

export default class Window extends React.Component {
  constructor () {
    super();
    this.state = {
      timeQuery: {},
      lines: [],
      hasGraph: false,
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.graphParams) {
      const query = {
        unit: nextProps.graphParams.timeUnit,
        length: nextProps.graphParams.timeLength,
        interval: nextProps.graphParams.timeFrequency,
      };
      this.setState({timeQuery: query});
      const linesArray = [];
      nextProps.graphParams.lines.forEach((line) => {
        linesArray.push(this.getLineData(line));
      });
      this.setState({lines: this.formatChartData(linesArray), hasGraph: true,});
    }
  }

  formatChartData (array) {
    const newLines = [];
    for (let i=0; i<this.props.graphParams.timeLength; i++) {
      const yValues = {x: i};
      array.forEach((line) => {
        const sym = Object.keys(line)[0];
        const key = line.key;
        const samples = line[sym];
        const datum = samples[i][key];
        yValues[sym] = datum;
      });
      newLines.push(yValues);
    }
    return newLines;
  }

  getLineData (line) {
    const query = this.state.timeQuery;
    if (this.props.graphParams.metric === 'price') {
      query.coinFrom = line;
      query.coinTo = this.props.graphParams.output;
      const dataKey = 'closingPrice';
    }
    else {
      query.coinFrom = this.props.graphParams.output;
      query.coinTo = line;
      const dataKey = 'volumeTo';
    }
    const data = {};
    DataHelper.getHistory(query).then((response) => {
      data[line] = response.body;
      data[key] = dataKey;
      return data;
    });
  }

  render () {
    return (
      <div>
        {this.state.hasGraph ? <LineGraph lines={this.state.lines} /> : false}
      </div>
    );
  }
}
