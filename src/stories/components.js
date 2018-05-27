import React from 'react';

import {storiesOf} from '@storybook/react';
import {CardListUi} from "../components/card-list/card-list-ui";
import {getCardMockList} from "../models/CardMock";

storiesOf('CardUi list', module)
  .addWithStaticMarkup('Default', () =>
    <CardListUi cards={getCardMockList}/>);
