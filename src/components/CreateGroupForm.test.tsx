import { render, screen, cleanup } from '@testing-library/react'
import { shallow, mount } from 'enzyme'

import CreateGroupForm from './CreateGroupForm'

afterEach(cleanup)

describe('component CreateGroupForm', () => {
  beforeAll(() => {
    global.matchMedia = global.matchMedia || function () {
      return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }}
  })

  it('renders without errors', () =>{
    render(<CreateGroupForm />)
  })

  it('renders button "Create Group"', () => {
    render(<CreateGroupForm />)

    expect(screen.getByText('Create Group')).toBeInTheDocument()
  })

  it('renders CollectionCreateForm', () => {
    const wrapper = shallow(<CreateGroupForm />)
    
    expect(wrapper.find('CollectionCreateForm').length).toEqual(1)
  })

  it("test form's visibility", () =>{
    const wrapper = mount(<CreateGroupForm />)
    expect(wrapper.find('CollectionCreateForm').prop('visible')).toBe(false)

    wrapper.find('.button-test').find('button').simulate('click')

    expect(wrapper.find('CollectionCreateForm').prop('visible')).toBe(true)
  })

  it('renders a title input', () => {
   const wrapper = mount(<CreateGroupForm />)
    const button = wrapper.find('.button-test').find('button')
    expect(button.exists()).toBeTruthy()
    button.simulate('click')
    const input = wrapper.find('.title-input-test')
    expect(input.exists()).toBeTruthy()
  })

  it('renders a input with description', () => {
   const wrapper = mount(<CreateGroupForm />)
    const button = wrapper.find('.button-test').find('button')
    
    button.simulate('click')
    const input = wrapper.find('.des-input-test')
    expect(input.exists()).toBeTruthy()
  })

  it('shows a DatePicker', () => {
   const wrapper = mount(<CreateGroupForm />)
    const button = wrapper.find('.button-test').find('button')
    
    button.simulate('click')
    const selector = wrapper.find('.datePicker-test')
    expect(selector.exists()).toBeTruthy()
  })

  it('shows a Radio selector', () => {
   const wrapper = mount(<CreateGroupForm />)
    const button = wrapper.find('.button-test').find('button')
    
    button.simulate('click')
    const radioButtons = wrapper.find('.radio-btn-test')
    expect(radioButtons.exists()).toBeTruthy()
  })

  it('shows button "Create"', () => {
   const wrapper = mount(<CreateGroupForm />)
    const button = wrapper.find('.button-test').find('button')
    
    button.simulate('click')
    const createBtn = wrapper.find('.modal-test').find('button.ant-btn-primary')
    expect(createBtn.exists()).toBeTruthy()
  })

  it('shows button "Cancel"', () => {
   const wrapper = mount(<CreateGroupForm />)
    const button = wrapper.find('.button-test').find('button')
    
    button.simulate('click')
    const createBtn = wrapper.find('.modal-test').find('button.ant-btn')
    expect(createBtn.exists()).toBeTruthy()
  })
})