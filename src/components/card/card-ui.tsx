import * as React from 'react';
import {ICard} from '../../models/Card';
import {CardDataItem} from '../card-data-item/card-data-item';
import {DieSidesUi} from '../die-sides/die-sides';
import {onlyUpdateForKeys} from 'recompose';

export interface ICardProps {
  card: ICard;
}

export const CardUi = onlyUpdateForKeys(['side'])(({card}: ICardProps) => {

  return (
    <section className="card">
      <img src={card.imagesrc} alt={card.name}/>
      <DieSidesUi sides={card.sides}/>
      <ul className="cardDataList">
        <CardDataItem title="Name" data={card.name}/>
        <CardDataItem title="Cost" data={card.cost}/>
        <CardDataItem title="Health" data={card.health}/>
        <CardDataItem title="Points" data={card.points}/>
        <CardDataItem title="Faction" data={card.faction_name}/>
        <CardDataItem title="Affiliation" data={card.affiliation_name}/>
        <CardDataItem title="Text" data={card.text}/>
        <CardDataItem title="subtitle" data={card.subtitle}/>
        <CardDataItem title="Flavor" data={card.flavor}/>
      </ul>
    </section>);
});
