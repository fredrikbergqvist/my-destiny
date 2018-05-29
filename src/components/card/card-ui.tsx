import * as React from 'react';
import {ICard} from '../../models/Card';
import {CardDataItem} from '../card-data-item/card-data-item';
import {DieSidesUi} from '../die-sides/die-sides';
import {onlyUpdateForKeys} from 'recompose';

export interface ICardProps {
  card: ICard;
  type?: CardDisplayType;
}

export enum CardDisplayType {
  detail,
  list,
  gallery
}

export const CardUi = onlyUpdateForKeys(['card', 'type'])(({card, type = CardDisplayType.detail}: ICardProps) => {
  const getCssClass = () => {
    let css = 'card';
    switch (type) {
      case CardDisplayType.detail:
        css += ' card--detail';
        break;
      case CardDisplayType.gallery:
        css += ' card--gallery';
        break;
      case CardDisplayType.list:
        css += ' card--list';
        break;
    }
    return css;
  };
  const image = type === CardDisplayType.detail || CardDisplayType.gallery ?
    (<img src={card.imagesrc} alt={card.name}/>) : null;
  const dieSide = CardDisplayType.detail ?
    (<DieSidesUi sides={card.sides}/>) : null;

  return (
    <section className={getCssClass()}>
      {image}
      {dieSide}
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
