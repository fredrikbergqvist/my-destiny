import {mount, shallow} from 'enzyme';
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
    const wrapper = mount(<DieSidesUi sides={['1R']}/>);
    const header = <li><span>1R</span></li>;
    expect(wrapper).toContainReact(header);
  });

  it('should return null if data prop is null', () => {
    const data: string[] = null;
    const wrapper = shallow(<DieSidesUi sides={data}/>);
    expect(wrapper.dive().get(0)).toBeFalsy();
  });
  it('should return null if data prop is empty array', () => {
    const data: string[] = [];
    const wrapper = shallow(<DieSidesUi sides={data}/>);
    console.log(wrapper.dive());
    expect(wrapper.dive().get(0)).toBeFalsy();
  });
});
