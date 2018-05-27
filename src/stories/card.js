import React from 'react';

import {storiesOf} from '@storybook/react';

import {CardUi} from '../components/card/card-ui';
import {
  getCharacterCardMock,
  getEventCardMock,
  getPlotCardMock,
  getSupportCardMock,
  getUpgradeCardMock
} from "../models/CardMock";

storiesOf('CardUi', module)
  .addWithStaticMarkup('Character', () => <CardUi card={getCharacterCardMock()}/>)
  .addWithStaticMarkup('Upgrade', () => <CardUi card={getUpgradeCardMock}/>)
  .addWithStaticMarkup('Event', () => <CardUi card={getEventCardMock}/>)
  .addWithStaticMarkup('Support', () => <CardUi card={getSupportCardMock}/>)
  .addWithStaticMarkup('Plot', () => <CardUi card={getPlotCardMock}/>);
