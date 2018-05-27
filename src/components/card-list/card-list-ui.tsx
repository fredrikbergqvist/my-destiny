import {CardUi} from '../card/card-ui';
import * as React from 'react';
import {ICard} from '../../models/Card';

export interface ICardListProps {
  cards: ICard[];
}

export const CardListUi = (props: ICardListProps) => {
  return (<ul className={'card-list'}>
    {props.cards.map((c) => <li key={c.code}><CardUi card={c}/></li>)}
  </ul>);
};
