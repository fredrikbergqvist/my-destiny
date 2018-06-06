import {
  addCardToCollectionAction,
  addDieToCollectionAction,
  removeCardFromCollectionAction,
  removeDieFromCollectionAction
} from './collection-list-actions';


export const addCardToCollectionActionCreator = (cardId: number) => ({
  type: addCardToCollectionAction,
  payload: cardId
});

export const removeCardFromCollectionActionCreator = (cardId: number) => ({
  type: removeCardFromCollectionAction,
  payload: cardId
});

export const addDieToCollectionActionCreator = (cardId: number) => ({
  type: addDieToCollectionAction,
  payload: cardId
});

export const removeDieToCollectionActionCreator = (cardId: number) => ({
  type: removeDieFromCollectionAction,
  payload: cardId
});
