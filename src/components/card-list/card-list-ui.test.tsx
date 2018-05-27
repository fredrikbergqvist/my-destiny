import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ICard} from '../../models/Card';
import {CardListUi} from './card-list-ui';
import {getCharacterCardMock} from '../../models/CardMock';

const baseCards: ICard[] = [getCharacterCardMock(), getCharacterCardMock('000001')];

describe('CardListUi', function () {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardListUi cards={baseCards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
