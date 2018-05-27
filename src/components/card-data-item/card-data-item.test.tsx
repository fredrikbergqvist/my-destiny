import * as React from 'react';
import 'jest-enzyme';
import * as ReactDOM from 'react-dom';
import {CardDataItem} from './card-data-item';
import {shallow} from 'enzyme';

describe('cardDataItem', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardDataItem title="Card title" data="Card data"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the data item properly', () => {
    const wrapper = shallow(<CardDataItem title="Card title" data="Card data"/>);
    const header = <li className="cardData_item"><
      span className="cardData_title">Card title</span>
      <span className="cardData_data">Card data</span>
    </li>;
    expect(wrapper.dive()).toContainReact(header);
  });

  it('should return null if data prop is null', () => {
    const data: string = null;
    const wrapper = shallow(<CardDataItem title="Card title" data={data}/>);
    expect(wrapper.dive().get(0)).toBeFalsy();
  });
});
