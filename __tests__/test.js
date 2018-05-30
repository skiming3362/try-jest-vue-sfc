import { mount } from '@vue/test-utils'
import Component from '@/App'

describe('Component', () => {
  it('是一个 Vue 实例', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  
})