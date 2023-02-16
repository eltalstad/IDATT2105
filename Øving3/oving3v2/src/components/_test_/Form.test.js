import {test, expect} from 'vitest'
import {mount}} from '@vue/test-utils'
import {createPinia} from 'pinia'
import Form from '../Form.vue'

test('Form', () => {
    const Pinia = createPinia()
  const wrapper = mount(Form, {global: {plugins: [Pinia]}})

  expect(wrapper.html()).toContain('Name')
  expect(wrapper.html()).toContain('Email')
  expect(wrapper.html()).toContain('Message')
})
