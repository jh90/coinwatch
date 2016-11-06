import React from 'react';
import daemon from 'superagent';

const propTypes = {
  handleSelections: React.PropTypes.func,
  coinList: React.PropTypes.array,
};

export default class ConversionMenu extends React.Component {
  constructor () {
    super();
    this.state = {
      coinFrom: '',
      coinsTo: [],
      allCoins: [],
    };
    this.handleBaseSelection = this.handleBaseSelection.bind(this);
    this.handleOutputSelections = this.handleOutputSelections.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCoinList () {
    daemon.get('/api/data/index')
          .then((response) => {
            this.setState({
              allCoins: response.body,
            });
          });
  }

  componentDidMount () {
    this.getCoinList();
  }

  handleBaseSelection (e) {
    const selectedCoin = e.target.value;
    this.setState({coinFrom: selectedCoin,});
  }

  handleOutputSelections (e) {
    const selectedCoin = e.target.value;
    const stateClone = this.state.coinsTo;
    stateClone.push(selectedCoin);
    this.setState({coinsTo: stateClone});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.handleSelections(this.state.coinFrom, this.state.coinsTo);
  }

  render () {
    const showMenu = this.state.showOutputMenu;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select required>
            {
              this.state.allCoins.map((coin) => {
                const name = coin.name;
                const sym = coin.sym;
                return (
                  <option value={coin.sym} onClick={this.handleBaseSelection}>
                    `${name} ${sym}`</option>
                );
              })
            }
          </select>
          <select multiple required>
            {
              this.state.allCoins.map((coin) => {
                if (!this.state.coinsTo.includes(coin.sym)) {
                  return (
                    <option value={coin.sym} onClick={this.handleOutputSelections}>
                      {`${coin.name} (${coin.sym})`}</option>
                  );
                }
              })
            }
          </select>
          <input type='submit' value='Search' />
        </form>
        <div>{`From ${this.state.coinFrom}`}</div>
        <div>To:</div>
        <ul>
          {
            this.state.coinsTo.forEach((coin) => {
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
