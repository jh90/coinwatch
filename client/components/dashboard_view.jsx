import React from 'react';

import ConversionsTab from 'conversions_tab.jsx';

export default class DashboardView extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <ConversionsTab />
      </div>
    );
  }
}
