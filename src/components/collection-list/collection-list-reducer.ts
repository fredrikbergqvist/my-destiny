import {ICard} from '../../models/Card';
import {IAction} from '../../redux/root-reducer';
import {addCardToCollectionAction} from './collection-list-actions';
import {getCardCollection} from '../helpers/card-collection-helper';


export interface ICollectionListState {
  cards: ICard[];
}

const initialState: ICollectionListState = {
  cards: getCardCollection(),
};

const collectiondListReducer = (state: ICollectionListState = initialState, action: IAction) => {
  switch (action.type) {
    case addCardToCollectionAction:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default collectiondListReducer;
