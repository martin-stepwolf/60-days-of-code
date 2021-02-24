import React from 'react';
import Hello from '../components/Hello';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('Test in react', () => {
    test('the text is received in the prop', () => {
        const data = {title: 'Hello jest'};
        const wrapper = mount(
            <Hello title={data}/>
        );
        const h1 = wrapper.find('h1');
        expect(h1.text).toBe('Hello jest');
    })
})

describe('Test in react', () => {
  test('The text is received in the prop', () => {
    const data = { title: 'Hello Jest' };
    const wrapper = mount(
      <Hello title={data.title} />
    );
    const p = wrapper.find('h1');
    expect(p.text()).toBe('Hello Jest');
  });
});