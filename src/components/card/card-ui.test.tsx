import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CardUi} from './card-ui';
import {getCharacterCardMock, getEventCardMock, getUpgradeCardMock} from '../../models/CardMock';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import {CardDataItem} from '../card-data-item/card-data-item';

describe('CardUi', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardUi card={getCharacterCardMock()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe('Character card', () => {
    it('should render the image', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <img src="http://swdestinydb.com/bundles/cards/en/01/01001.jpg" alt="Captain Phasma"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data name', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Name" data="Captain Phasma"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data health', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Health" data={11}/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data points', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Points" data="12/15"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data faction', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Faction" data="Command"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Affiliation', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Affiliation" data="Villain"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Text', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Text" data="Your non-unique characters have the Guardian keyword."/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data subtitle', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="subtitle" data="Elite Trooper"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Flavor', () => {
      const wrapper = shallow(<CardUi card={getCharacterCardMock()}/>);
      const header = <CardDataItem title="Flavor"
                                   data="&quot;Whatever you&#x27;re planning, it won&#x27;t work.&quot;"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
  });
  describe('Event card', () => {
    it('should render the image', () => {
      const wrapper = shallow(<CardUi card={getEventCardMock}/>);
      const header = <img src="http://swdestinydb.com/bundles/cards/en/01/01116.jpg" alt="Force Misdirection"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data name', () => {
      const wrapper = shallow(<CardUi card={getEventCardMock}/>);
      const header = <CardDataItem title="Name" data="Force Misdirection"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data faction', () => {
      const wrapper = shallow(<CardUi card={getEventCardMock}/>);
      const header = <CardDataItem title="Faction" data="Force"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Affiliation', () => {
      const wrapper = shallow(<CardUi card={getEventCardMock}/>);
      const header = <CardDataItem title="Affiliation" data="Hero"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Text', () => {
      const wrapper = shallow(<CardUi card={getEventCardMock}/>);
      const header = <CardDataItem title="Text"
                                   data="Choose a symbol showing on one of your Blue dice. Then remove all of an opponent&#x27;s dice showing that symbol."/>;
      expect(wrapper.dive()).toContainReact(header);
    });
  });
  describe('Upgrade card', () => {
    it('should render the image', () => {
      const wrapper = shallow(<CardUi card={getUpgradeCardMock}/>);
      const header = <img src="http://swdestinydb.com/bundles/cards/en/02/02006.jpg" alt="Imperial Discipline"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data name', () => {
      const wrapper = shallow(<CardUi card={getUpgradeCardMock}/>);
      const header = <CardDataItem title="Name" data="Imperial Discipline"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Cost', () => {
      const wrapper = shallow(<CardUi card={getUpgradeCardMock}/>);
      const header = <CardDataItem title="Cost" data={1}/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data faction', () => {
      const wrapper = shallow(<CardUi card={getUpgradeCardMock}/>);
      const header = <CardDataItem title="Faction" data="Command"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Affiliation', () => {
      const wrapper = shallow(<CardUi card={getUpgradeCardMock}/>);
      const header = <CardDataItem title="Affiliation" data="Villain"/>;
      expect(wrapper.dive()).toContainReact(header);
    });
    it('should render card data Text', () => {
      const wrapper = shallow(<CardUi card={getUpgradeCardMock}/>);
      const header = <CardDataItem title="Text" data="Red character only.
&lt;b&gt;Action&lt;/b&gt; - Remove this die to turn one of this character&#x27;s character or upgrade dice to a side showing ranged damage ([ranged]) or a resource ([resource])."/>;
      expect(wrapper.dive()).toContainReact(header);
    });
  });
});
