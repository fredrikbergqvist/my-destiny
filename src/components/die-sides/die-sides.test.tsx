import {shallow} from 'enzyme';
import * as ReactDOM from 'react-dom';
import {DieSidesUi} from './die-sides';
import * as React from 'react';

fdescribe('DieSideUi', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DieSidesUi sides={['1R']}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the data item properly', () => {
    const wrapper = shallow(<DieSidesUi sides={['1R']}/>);
    expect(wrapper.dive()).toBeTruthy();
  });

  it('should return null if data prop is null', () => {
    const data: string[] = null;
    const wrapper = shallow(<DieSidesUi sides={data}/>);
    expect(wrapper.dive().get(0)).toBeFalsy();
  });
  it('should return null if data prop is empty array', () => {
    const data: string[] = [];
    const wrapper = shallow(<DieSidesUi sides={data}/>);
    expect(wrapper.dive().get(0)).toBeFalsy();
  });
});
