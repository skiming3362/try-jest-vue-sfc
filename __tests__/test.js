import { mount, shallowMount } from '@vue/test-utils'
import App from '@/App'

const wrapper = shallowMount(App)
describe('Component', () => {
  it('是一个 Vue 实例', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  
  it ('触发点击事件', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})