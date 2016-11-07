import React from 'react';
import daemon from 'superagent';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class ConversionMenu extends React.Component {
  constructor () {
    super();
    this.state = {
      coinFrom: '',
      coinsTo: [],
      allCoins: [],
      coinToSearchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSelection = this.handleAddSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCoinList () {
    const listArray = [];
    daemon.get('/api/data/index')
          .then((response) => {
            response.body.forEach((coin) => {listArray.push(coin);});
            this.setState({
              allCoins: listArray,
            });
          });
  }

  componentDidMount () {
    this.getCoinList();
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

  displayCoinList () {
    return this.state.allCoins.map((coin) => {
      return (
        <option value={coin.sym}>
         {coin.name} ({coin.sym})</option>
      );
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
        <div>{`From ${this.state.coinFrom}`}</div>
        <div>To:</div>
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
