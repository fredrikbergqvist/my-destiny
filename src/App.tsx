import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import CardListUi from './components/card-list/card-list-ui';
import CardListFilterUi from './components/card-list-filter/card-list-filter-ui';


export default class App extends React.Component {
  public render() {

    const listUi = true ? null : (<div><CardListFilterUi/> <CardListUi/></div>);
    const deckListUi = true ? (<div></div>) : null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Deck list printer</h1>
        </header>
        <p className="App-intro">
        </p>

        {listUi}
        {deckListUi}
      </div>
    );
  }
}

