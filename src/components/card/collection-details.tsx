import {onlyUpdateForKeys} from 'recompose';
import die from '../../icons/die.svg';
import cards from '../../icons/cards.svg';
import * as React from 'react';
import {ICollectionDetails} from '../helpers/card-collection-helper';


export const CollectionDetails = onlyUpdateForKeys(['collectionData'])
(({dice, quantity}: ICollectionDetails) => {
  let diceIcons = [];
  for (let i = 0; i < dice; i++) {
    diceIcons.push(<img key={i} src={die} alt="one die" className="card__die"/>);
  }

  let cardIcons = [];
  for (let i = 0; i < quantity; i++) {
    cardIcons.push(<img key={i} src={cards} alt="one card" className="card__card"/>);
  }

  return (<div className="card__collection-info">
    <div>
      {diceIcons}
    </div>
    <div>
      {cardIcons}
    </div>
  </div>);
});
