import {CardDisplayType, CardUi} from '../card/card-ui';
import * as React from 'react';
import {IAppState} from '../../store/configure-store';
import {connect, Dispatch} from 'react-redux';
import * as cardListActions from './card-list-action-creators';
import {ICardListState} from './card-list-reducer';
import {bindActionCreators} from 'redux';
import {ICard} from '../../models/Card';


export enum CardListType {
  table,
  gallery
}

interface ICardListProps {
  actions?: any;
  type?: CardListType;
  cards?: ICard[];
}

class CardListUi extends React.Component<ICardListProps, ICardListState> {
  constructor(props: ICardListProps, context: any) {
    super(props, context);
  }

  public changeListTypeToGallery = () => {
    return this.props.actions.changeCardListTypeActionCreator(CardListType.gallery);
  };

  public changeListTypeToTable = () => {
    return this.props.actions.changeCardListTypeActionCreator(CardListType.table);
  };

  public render() {
    const cssClass = (this.props.type === CardListType.table ? 'card-list--table' : 'card-list--gallery') + ' card-list';
    const cardType = this.props.type === CardListType.table ? CardDisplayType.list : CardDisplayType.gallery;
    return (
      <div className={cssClass}>
        <div className="card-list_displayType">
          <button onClick={this.changeListTypeToTable}><span>List</span></button>
          <button onClick={this.changeListTypeToGallery}><span>Gallery</span></button>
        </div>
        <ul className="card-list_list">
          {this.props.cards.map((c) => <li key={c.code} className="card-list_item"><CardUi card={c} type={cardType}/>
          </li>)}
        </ul>
      </div>);
  }

}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(cardListActions, dispatch)
  };
}

function mapStateToProps(state: IAppState) {
  console.log(state);
  return state.cardList;
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListUi);
