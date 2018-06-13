import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import CardListUi from './components/card-list/card-list-ui';
import CardListFilterUi from './components/card-list-filter/card-list-filter-ui';


export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to your destiny</h1>
        </header>
        <p className="App-intro">
        </p>
        <CardListFilterUi/>
        <CardListUi/>
      </div>
    );
  }
}

