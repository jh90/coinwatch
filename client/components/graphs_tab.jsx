import React from 'react';
import daemon from 'superagent';
import CurrencyHelper from '../helpers/currency_helper.js';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class GraphsTab extends React.Component {
  constructor () {
    super();
    this.state = {
      timeUnit: '',
      timeFrequency: 1,
      timeLength: 24,
      output: '',
      lines: [],
      metric: '',
      newLine: '',
      allCoins: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddSelection = this.handleAddSelection.bind(this);
    this.deleteLine = this.deleteLine.bind(this);
  }

  componentDidMount () {
    CurrencyHelper.then((currencies) => {
      this.setState({allCoins: currencies,});
    });
  }

  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    const stateClone = this.state;
    stateClone[name] = value;
    this.setState(stateClone);
  }

  handleAddSelection (e) {
    e.preventDefault();
    const stateClone = this.state.lines;
    stateClone.push(this.state.newLine);
    this.setState({lines: stateClone,});
    const lineInput = document.getElementById('src');
    lineInput.value = '';
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  deleteLine (e) {
    const index = e.target.id;
    const stateClone = this.state.lines;
    stateClone.splice(index, 1);
    this.setState({lines: stateClone,});
  }

  displayLineSelections () {
    return (
      <ul>
        {
          this.state.lines.map((line, idx) => {
            return (
              <li>{line} <button id={idx} onClick={this.deleteLine}>x</button></li>
            );
          })
        }
      </ul>
    );
  }

  render () {
    return (
      <div>
        <div className='menu conversions'>
        <div className='submenu coin-from'>
          <h4>Data</h4>
          <span>Graph</span>
          <select name='metric' onChange={this.handleChange} >
            <option></option>
            <option value='price'>Price(s) in</option>
            <option value='volume'>Volume(s) to</option>
          </select>
          <input list='coins-from'
               id='y-axis-coin'
               name='output'
               onChange={this.handleChange} />
          <datalist id='coins-from' >
            {
              this.state.allCoins.map((coin) => {
                return (
                  <option value={coin.sym}>
                  {coin.name} ({coin.sym})</option>
                );
              })
            }
          </datalist>
        </div>
        <div className='submenu coins-to'>
          <span>of</span>
          <form onSubmit={this.handleAddSelection} >
            <input list='graph-coins-from'
                   id='src'
                   name='newLine'
                   onChange={this.handleChange} />
            <datalist id='graph-coins-from' >
              {
                this.state.allCoins.map((coin) => {
                  return (
                    <option value={coin.sym}>
                    {coin.name} ({coin.sym})</option>
                  );
                })
              }
            </datalist>
          </form>
          {this.displayLineSelections()}
        </div>
        </div>
        <div className='menu timescale'>
          <h4>Timescale</h4>
          <span>Sample every  </span>
          <input type='number' name='timeFrequency' defaultValue={1} onChange={this.handleChange} />
          <select name='timeUnit' onChange={this.handleChange} >
            <option></option>
            <option value='minute'>minutes</option>
            <option value='hour'>hours</option>
            <option value='day'>days</option>
          </select>
          <span>   for   </span>
          <input type='number' name='timeLength' placeholder='Interval number' onChange={this.handleChange} />
        </div>
        <button id='generate' onClick={this.handleSubmit}>Generate</button>
      </div>
    );
  }
}

GraphsTab.propTypes = propTypes;
