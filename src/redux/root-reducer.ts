import {combineReducers} from 'redux';
import cardList from '../components/card-list/card-list-reducer';

export const rootReducers = combineReducers({
  cardList
});

export interface IAction {
  type: string;
  payload: any;
}
