convert bw coins
convert to fiat
(compare) highlow charts
(multi-line) price/volume graphs
save (and publish) snapshots

populate coinlist globally with script in indexhtml

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

  <Chart
        width: 960px;
        height: 500px;
      >
        <
      </Chart>

//menu tabs: conversions, line graphs, streamgraphs
          2 coin dropdowns
            coins vs fiat - experiment
          display pane for coinsTo
          options - toggles, checkboxes, input for interval, dropdowns for unit and period
          x-axis is always time
          linegraphs: y-axis is price or volume in COIN
          stream: y is volume in COIN
          ^+by exchange-?
            all or one, not several - dropdown
            how to get all supported exchanges? use coinsnapshot
              trigger after coin:coin selected
              if multiple coins look for exchanges meeting cross-section
                else discard unsupported selections?
  
        //reusable components:
          coin:coin(s) selector - dropdowns, selection pane
          exchange-selection logic
          interval/unit/period menu
          

        //helpers
          graph frame/plane
          graph drawing

price, many prices over time
volume, many volumes over time
for coin:coin, coin:[coins]

<select required className='coin-menu' onChange={this.handleBaseSelection} >
            <option></option>
            {this.displayCoinList()}
          </select>
          <select multiple required className='coin-menu' onChange={this.handleOutputSelections} >
            {this.displayCoinList()}
          </select>
          <input type='submit' value='Search' />
        </form>
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


graphs
  cryptocompare API
  from user-given coin, exchange, and time parameters
  dynamic - and static?
  D3 -&?
  save, publish, and/or snapshot features (2+) - with delete
  stream or stacked-bar graph?
  exchanges vs coins - prices vs volumes - what user options for timescales?
execute trades
  shapeshift API
    seed addresses, just store keys in db
  no fiat - default purchase base is BTC

price ticker
newsreel

React+D3+Flexbox
Express
firebase
(/)Heroku?

prices in USD/fiat
prices in BTC
volume of exchange

live
today
historical

price
histominute
histohour
histoday
listofcoins

save frame vs save snapshot

/users
  #id
  email
  name
/saves
  #id
  ?published
  /data
    ?snapshot/frame
    graphtype
    period
    interval
    ?aggregate
    base
    format
    outputs

API

DB
get user
new user
edit user name/email
delete user

get saves
get published saves
new save
delete save

SHAPESHIFT
post transaction
display wallet content?
check transaction status
get transaction history(?)

CRYPTOCOMPARE
get prices
get histo(min,hr,day)
get supported coins

