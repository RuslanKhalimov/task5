import React, { Component } from 'react';

import './app.css';
import { Header } from './header';
import { Main } from './main';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}
