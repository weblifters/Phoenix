import React, { Component } from 'react';
import SqlSubmit            from './sql_submit';
import QueryGrid            from './query_grid';
import Header               from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
