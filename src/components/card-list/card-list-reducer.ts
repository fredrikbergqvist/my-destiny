import {CardListType} from './card-list-ui';
import {changeCardListTypeAction} from './card-list-actions';
import {ICard} from '../../models/Card';
import {IAction} from '../../redux/root-reducer';
import {allCards} from '../../data/cards';


export interface ICardListState {
  cards: ICard[];
  type: CardListType;
}

const initialState: ICardListState = {
  cards: allCards,
  type: CardListType.gallery
};

const cardListReducer = (state: ICardListState = initialState, action: IAction) => {
  switch (action.type) {
    case changeCardListTypeAction:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
};

export default cardListReducer;
