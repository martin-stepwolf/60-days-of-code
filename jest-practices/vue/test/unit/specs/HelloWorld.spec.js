import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

describe('Test in Vue', () => {
  test('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Hello Vue :)')
  })

  test('Create a snapshot', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el).toMatchSnapshot()
  })

})