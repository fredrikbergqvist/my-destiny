import * as React from 'react';
import 'jest-enzyme';
import * as ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {DieSideUi} from './die-side';

describe('DieSideUi', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DieSideUi side="1R"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the data item properly', () => {
    const wrapper = shallow(<DieSideUi side="1R"/>);
    const header = <li><span>1R</span></li>;
    expect(wrapper.dive()).toContainReact(header);
  });

  it('should return null if data prop is null', () => {
    const data: string = null;
    const wrapper = shallow(<DieSideUi side={data}/>);
    expect(wrapper.dive().get(0)).toBeFalsy();
  });
});
