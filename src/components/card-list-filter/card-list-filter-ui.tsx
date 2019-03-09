import {connect, Dispatch} from 'react-redux';
import {IAppState} from '../../store/configure-store';
import * as cardListFilterActions from '../card-list-filter/card-list-filter-action-creators';
import {bindActionCreators} from 'redux';
import * as React from 'react';
import {ICardListFilterState} from '../card-list/card-list-reducer';

interface ICardListFilterProps extends ICardListFilterState {
  actions?: any;
}

class CardListFilterUi extends React.Component<ICardListFilterProps, ICardListFilterState> {

  searchQueryChange = (value: string) => {
    this.props.actions.changeCardListFilterActionCreator({
      searchQuery: value
    });
  };
  inCollectionClick = () => {
    this.props.actions.changeCardListFilterActionCreator({
      inCollection: !this.props.inCollection
    });
  };

  render() {
    return (<nav className="card-list-filter">
      <form className="card-list-filter__form">
        <fieldset>
          <div className="card-list-filter__name">
            <label htmlFor="searchQuery">Card name</label>
            <input type="input"
                   name="searchQuery"
                   id="searchQuery"
                   onChange={e => this.searchQueryChange(e.target.value)}
                   value={this.props.searchQuery}
            />
          </div>
          <div className="card-list-filter__in-collection">
            <input type="checkbox"
                   name="inCollection"
                   id="inCollection"
                   onClick={e => this.inCollectionClick()}
                   checked={this.props.inCollection}
            />
            <label htmlFor="inCollection">Only collected</label>
          </div>
          <div className="card-list-filter__not-in-collection">
            <input type="checkbox"
                   name="inCollection"
                   id="inCollection"
                   onClick={e => this.inCollectionClick()}
                   checked={!this.props.inCollection}
            />
            <label htmlFor="inCollection">Only missing</label>
          </div>
        </fieldset>
      </form>
    </nav>);
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

export default connect(mapStateToProps, mapDispatchToProps)(CardListFilterUi);
