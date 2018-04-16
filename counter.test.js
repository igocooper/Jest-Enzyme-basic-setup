import React from 'react'
import Counter from './counter';
import { shallow } from 'enzyme';

describe('Count component', () => {
  it('Start with a count of 0', () => {
    const wrapper = shallow(<Counter/>);
    const countState = wrapper.state.count;
    expect(countState).toEqual(0);
  });
});

