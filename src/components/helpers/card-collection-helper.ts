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
