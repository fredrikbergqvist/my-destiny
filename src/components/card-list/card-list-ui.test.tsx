import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CardListUi from './card-list-ui';
import {shallow} from 'enzyme';

// const baseCards: ICard[] = [getCharacterCardMock(), getCharacterCardMock('000001')];

describe('CardListUi', function () {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardListUi/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set correct css classes for table view', () => {

    const wrapper = shallow(<CardListUi/>);
    expect(wrapper.dive().find('.card-list--table')).toExist();
    expect(wrapper.dive().find('.card-list--gallery')).not.toExist();
  });
  it('should set correct css classes for table view', () => {

    const wrapper = shallow(<CardListUi/>);
    expect(wrapper.dive().find('.card-list--table')).not.toExist();
    expect(wrapper.dive().find('.card-list--gallery')).toExist();
  });
});
