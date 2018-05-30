import { mount } from '@vue/test-utils'
import App from '@/App'

const wrapper = mount(App)
describe('Component', () => {
  it('是一个 Vue 实例', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  
  it ('触发点击事件', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})