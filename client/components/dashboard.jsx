import React from 'react';

import ConversionsTab from './conversions_tab.jsx';
import GraphsTab from './graphs_tab.jsx';

const propTypes = {
  handleGraphParams: React.PropTypes.func,
};

export default class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {
      openTab: 'graphs',
    };
    this.openConversionTab = this.openConversionTab.bind(this);
    this.openGraphTab = this.openGraphTab.bind(this);
  }

  openConversionTab () {
    this.setState({openTab: 'conversion'});
  }

  openGraphTab () {
    this.setState({openTab: 'graphs'});
  }

  toggleMenu () {
    const tab = this.state.openTab;
    switch (tab) {
      case 'conversion':
        return (<ConversionsTab />);
      break;
      case 'graphs':
        return (<GraphsTab handleSubmit={this.props.handleGraphParams} />);
      break;
      default:
        return (<GraphsTab />);
    }
  }

  render () {
    return (
      <div id='dashboard'>
        <div className='dashboard nav'>
          <div className='tab' onClick={this.openConversionTab}>
            <h2>Conversions</h2>
          </div>
          <div className='tab' onClick={this.openGraphTab}>
            <h2>Graphs</h2>
          </div>
        </div>
        <div className='dashboard content'>
          {this.toggleMenu()}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;
