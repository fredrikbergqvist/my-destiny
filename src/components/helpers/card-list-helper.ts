import {ICardListFilterState} from '../card-list/card-list-reducer';
import {ICard} from '../../models/Card';
import {cardInCollection} from './card-collection-helper';

const searchQueryMatchesCard = (searchQuery: string, c: ICard) => {
  searchQuery = searchQuery.toLowerCase();
  const nameMatches: boolean = c.name.toLowerCase().indexOf(searchQuery) !== -1;
  const descriptionMatches: boolean = false; // c.text !== null && c.text.indexOf(searchQuery) !== -1;

  return nameMatches || descriptionMatches;
};

export const filterCards = (filter: ICardListFilterState, initialCardList: ICard[]): ICard[] => {
  return initialCardList.filter((c) => {
    if (filter.inCollection === true && cardInCollection(c.code) === null) {
      return false;
    }
    if (filter.searchQuery && searchQueryMatchesCard(filter.searchQuery, c) === false) {
      return false;
    }
    return true;
  });
};
