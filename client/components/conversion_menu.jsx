import React from 'react';
import daemon from 'superagent';
import CurrencyHelper from '../helpers/currency_helper.js';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class ConversionMenu extends React.Component {
  constructor () {
    super();
    this.state = {
      coinFrom: '',
      coinsTo: [],
      coinList: [],
      coinToSearchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSelection = this.handleAddSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    CurrencyHelper.then((currencies) => {
      this.setState({coinList: currencies,});
    });
  }

  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    const stateClone = this.state;
    stateClone[name] = value;
    this.setState(stateClone);
  }

  handleSubmit (e) {
    e.preventDefault();
    const baseCoinSearch = document.getElementById('base-coin-input');
    baseCoinSearch.value = '';
    const baseStateClone = this.state.coinFrom;
    const outStateClone = this.state.coinsTo;
    this.props.handleSubmit(baseStateClone, outStateClone);
    this.setState({
      coinFrom: '',
      coinsTo: [],
    });
  }

  handleAddSelection (e) {
    e.preventDefault();
    const stateClone = this.state.coinsTo;
    stateClone.push(this.state.coinToSearchInput);
    this.setState({coinsTo: stateClone,});
    const outCoinSearch = document.getElementById('out-coin-input');
    outCoinSearch.value = '';
  }

  displayCoinList () {
    return this.state.coinList.map((coin) => {
      return (
        <option value={coin.sym}>
         {coin.name} ({coin.sym})</option>
      );
    });
  }

  render () {
    return (
      <div>
        <input list='coins-from'
               id='base-coin-input'
               name='coinFrom'
               onChange={this.handleChange} />
        <datalist id='coins-from' >
          {this.displayCoinList()}
        </datalist>
        <form onSubmit={this.handleAddSelection} >
          <input list='coins-to'
                 id='out-coin-input'
                 name='coinToSearchInput'
                 onChange={this.handleChange} />
          <datalist id='coins-to' >
            {this.displayCoinList()}
          </datalist>
          <input type='submit' value='Add' />
        </form>
        <button onClick={this.handleSubmit}>Convert</button>
        <ul>
          {
            this.state.coinsTo.map((coin) => {
              return (
                <li>{coin}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

ConversionMenu.propTypes = propTypes;
