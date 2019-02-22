import { shallowMount } from '@vue/test-utils'
import SidesForm from '@/components/SidesForm'

describe('SidesForm', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(SidesForm)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
