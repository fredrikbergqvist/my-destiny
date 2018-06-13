import * as React from 'react';
import {ICard} from '../../models/Card';
import {CardDataItem} from '../card-data-item/card-data-item';
import {DieSidesUi} from '../die-sides/die-sides';
import {onlyUpdateForKeys} from 'recompose';
import './card-ui.css';
import {CollectionDetails} from './collection-details';

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
    if (card.collection.inCollection === true) {
      css += ' card--in-collection';
    }

    return css;
  };
  const collectionDetails = card.collection.inCollection === true ? (
    <CollectionDetails dice={card.collection.dice} quantity={card.collection.quantity}/>) : null;
  const image = type === CardDisplayType.detail || type === CardDisplayType.gallery ?
    (<img src={card.imagesrc} alt={card.name} className="card__image"/>) : null;
  const dieSide = CardDisplayType.detail ?
    (<DieSidesUi sides={card.sides}/>) : null;
  const properties = type === CardDisplayType.gallery ? null : <ul className="cardDataList">
    <CardDataItem title="Name" data={card.name}/>
    <CardDataItem title="Cost" data={card.cost}/>
    <CardDataItem title="Health" data={card.health}/>
    <CardDataItem title="Points" data={card.points}/>
    <CardDataItem title="Faction" data={card.faction_name}/>
    <CardDataItem title="Affiliation" data={card.affiliation_name}/>
    <CardDataItem title="Text" data={card.text}/>
    <CardDataItem title="subtitle" data={card.subtitle}/>
    <CardDataItem title="Flavor" data={card.flavor}/>
  </ul>;
  return (
    <section className={getCssClass()}>
      {image}
      {collectionDetails}
      {dieSide}
      {properties}
    </section>);
});
