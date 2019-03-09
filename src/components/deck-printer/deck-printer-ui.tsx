import {connect, Dispatch} from 'react-redux';
import {IAppState} from '../../store/configure-store';
import * as cardListFilterActions from '../card-list-filter/card-list-filter-action-creators';
import {bindActionCreators} from 'redux';
import * as React from 'react';
import {ICardListFilterState} from '../card-list/card-list-reducer';

interface ICardListFilterProps extends ICardListFilterState {
  actions?: any;
}

class DeckPrinterUi extends React.Component<ICardListFilterProps, ICardListFilterState> {

  searchQueryChange = (value: string) => {
    this.props.actions.changeCardListFilterActionCreator({
      searchQuery: value
    });
  };
  openPrintView = () => {
    this.props.actions.changeCardListFilterActionCreator({
      inCollection: !this.props.inCollection
    });
  };

  render() {
    return (
      <form className="card-list-filter__form">
        <fieldset>
          <div className="deck-printer__deck-url">
            <label htmlFor="searchQuery">SWDestinyDB.com deck URL</label>
            <input type="input"
                   name="searchQuery"
                   id="searchQuery"
                   onChange={e => this.searchQueryChange(e.target.value)}
                   value={this.props.searchQuery}
            />
          </div>
          <div className="deck-printer__deck-url">
            <label htmlFor="searchQuery">Your name</label>
            <input type="input"
                   name="searchQuery"
                   id="searchQuery"
                   onChange={e => this.searchQueryChange(e.target.value)}
                   value={this.props.searchQuery}
            />
          </div>
          <div className="deck-printer__deck-url">
            <label htmlFor="searchQuery">E-mail</label>
            <input type="input"
                   name="searchQuery"
                   id="searchQuery"
                   onChange={e => this.searchQueryChange(e.target.value)}
                   value={this.props.searchQuery}
            />
          </div>
          <div className="deck-printer__deck-url">
            <label htmlFor="searchQuery">Date</label>
            <input type="input"
                   name="searchQuery"
                   id="searchQuery"
                   onChange={e => this.searchQueryChange(e.target.value)}
                   value={this.props.searchQuery}
            />
          </div>
          <div className="deck-printer__deck-url">
            <label htmlFor="searchQuery">Event</label>
            <input type="input"
                   name="searchQuery"
                   id="searchQuery"
                   onChange={e => this.searchQueryChange(e.target.value)}
                   value={this.props.searchQuery}
            />
          </div>
          <button onClick={e => this.openPrintView()}></button>
        </fieldset>
      </form>);
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(cardListFilterActions, dispatch)
  };
}

function mapStateToProps(state: IAppState) {
  return state.cardList.listFilter;
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckPrinterUi);
