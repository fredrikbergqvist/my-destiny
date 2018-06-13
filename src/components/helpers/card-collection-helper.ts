import {ICard} from '../../models/Card';
import {myCollection} from '../../data/collection';

export interface ICollectionDetails {
  quantity: number;
  dice: number;
}

export const getCardCollection = (): ICard[] => {
  return [];
};

export const cardInCollection = (cardId: string): ICollectionDetails => {
  const collectionDetails: ICollectionDetails = myCollection[cardId.toString()];
  if (collectionDetails === undefined) {
    return null;
  }
  return collectionDetails;
};

export const addCollectionData = (cards: any[]): ICard[] => {
  return cards.map(c => {
    const collectionCard = cardInCollection(c.code);
    const inCollection = collectionCard !== null;
    c.collection = {
      inCollection,
      ...collectionCard
    };
    return c;
  });
};
