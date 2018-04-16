import React from 'react'
import Counter from './Counter';
import { shallow } from 'enzyme';

describe('Count component', () => {
  it('Start with a count of 0', () => {
    const wrapper = shallow(<Counter />);
    const countState = wrapper.state().count;
    const text = wrapper.find('p').text();

    expect(text).toEqual('Current count: 0');
  });

  it('Can increment the count by clicking the button.increment', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();

    expect(text).toEqual('Current count: 1');
  })

  it('Can decrement the count by clicking the button', () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();

    expect(text).toEqual('Current count: -1');
  })
});
