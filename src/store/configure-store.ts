import {applyMiddleware, createStore} from 'redux';
import epicMiddleware from '../redux/epic-middleware';
import {rootReducers} from '../redux/root-reducer';
import {ICardListState} from '../components/card-list/card-list-reducer';

export interface IAppState {
  cardList: ICardListState;
}

const store = createStore(
  rootReducers,
  applyMiddleware(epicMiddleware)
);

export default store;
