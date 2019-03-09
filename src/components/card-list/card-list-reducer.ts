import {CardListType} from './card-list-ui';
import {changeCardListTypeAction} from './card-list-actions';
import {ICard} from '../../models/Card';
import {IAction} from '../../redux/root-reducer';
import {allCards} from '../../data/cards';
import {addCollectionData} from '../helpers/card-collection-helper';
import {changeCardListFilterAction} from '../card-list-filter/card-list-filter-actions';
import {filterCards} from '../helpers/card-list-helper';


export interface ICardListFilterState {
  searchQuery: string;
  inCollection: boolean;
  notInCollection: boolean;
}

export interface ICardListState {
  originalCardList: any[];
  cards: ICard[];
  type: CardListType;
  listFilter: ICardListFilterState;
}


const initialFilterState: ICardListFilterState = {
  searchQuery: '',
  inCollection: false,
  notInCollection: false
};
const initialCardList = addCollectionData(allCards);
const initialState: ICardListState = {
  originalCardList: initialCardList,
  cards: initialCardList.concat([]),
  type: CardListType.gallery,
  listFilter: initialFilterState
};


const cardListReducer = (state: ICardListState = initialState, action: IAction) => {
  switch (action.type) {
    case changeCardListTypeAction:
      return {
        ...state,
        type: action.payload
      };
    case changeCardListFilterAction:
      const newFilterState = Object.assign({}, state.listFilter, action.payload);
      const newCardList = filterCards(newFilterState, state.originalCardList);
      const newState = {
        ...state,
        listFilter: newFilterState,
        cards: newCardList
      };
      return newState;
    default:
      return state;
  }
};

export default cardListReducer;
