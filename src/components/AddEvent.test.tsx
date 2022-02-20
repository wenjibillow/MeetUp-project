import { render, screen, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import AddEvent from './AddEvent'


afterEach(cleanup)

describe('<AddEvent /> component', () => {
  it('renders without errors', () => {
    render(<AddEvent />)
  })

  it('renders button "Add Event"', () => {
    render(<AddEvent />)

    expect(screen.getByText('Add Event')).toBeInTheDocument()
  })

  it('renders form-modal', () => {
    const wrapper = mount(<AddEvent />)
    wrapper.find('.add-event-btn').find('button').simulate('click')
    const formModal = wrapper.find('.form-modal')
    expect(formModal.exists()).toBeTruthy()
  })

  it('renders inputs of id, title and description', () => {
    const wrapper = mount(<AddEvent />)
    const button = wrapper.find('.add-event-btn').find('button')

    button.simulate('click')

    const id = wrapper.find('.id-input')
    const title = wrapper.find('.title-input')
    const description = wrapper.find('.description-input')

    expect(id.exists()).toBeTruthy()
    expect(title.exists()).toBeTruthy()
    expect(description.exists()).toBeTruthy()
  })

  it('renders child component <SingleAddedEvent />', () => {
    render(<AddEvent />)

    expect(screen.getByTestId('added-event-list')).toBeInTheDocument()
  })

  it("test form modal visibility", () => {
    const wrapper = mount(<AddEvent />)
    expect(wrapper.find('Modal').prop('visible')).toBe(false)

    wrapper.find('.add-event-btn').find('button').simulate('click')

    expect(wrapper.find('Modal').prop('visible')).toBe(true)
  })

  it('renders a date picker', () => {
    const wrapper = mount(<AddEvent />)
    const button = wrapper.find('.add-event-btn').find('button')

    button.simulate('click')

    const date = wrapper.find('Modal').find('.date-picker')

    expect(date.exists()).toBeTruthy()
  })
})