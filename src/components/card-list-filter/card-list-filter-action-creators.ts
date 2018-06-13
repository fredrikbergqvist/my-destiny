import {changeCardListFilterAction} from './card-list-filter-actions';
import {ICardListFilterState} from '../card-list/card-list-reducer';

export const changeCardListFilterActionCreator = (payload: ICardListFilterState) => ({
  type: changeCardListFilterAction,
  payload: payload
});
