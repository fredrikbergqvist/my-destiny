import {CardListType} from './card-list-ui';
import {changeCardListTypeAction} from './card-list-actions';

export const changeCardListTypeActionCreator = (listType: CardListType) => ({
  type: changeCardListTypeAction,
  payload: listType
});
