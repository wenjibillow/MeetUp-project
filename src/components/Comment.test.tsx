import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import { shallow, mount } from 'enzyme' 
import Comment from './Comment'
import { Modal, Button, Input } from 'antd' 

afterEach(cleanup)

describe('Comment component', () => {
  it('renders without errors', () => {
    render(<Comment />)
  })

  it('renders children components <Button />', () => {
    render(<Comment />)

    expect(screen.getByTestId('antd-button')).toBeInTheDocument()
  })

  it('test child component <Button />', ()=> {
    const wrapper = shallow(<Comment />)
    
    expect(wrapper.find(Button).length).toEqual(1)
  })

  it('test child component <Modal />', ()=> {
    const wrapper = shallow(<Comment />)
    
    expect(wrapper.find(Modal).length).toEqual(1)
  })

  it('test child component <Input />', ()=> {
    const wrapper = shallow(<Comment />)
    
    expect(wrapper.find(Input.TextArea).length).toEqual(1)
  })

  it('test onClick method in child component <Button />', async ()=> {
    const {getByText} = render(<Comment />)
    const button = getByText('Comment')

    await fireEvent.click(button)

    expect(button).toHaveTextContent('Comment')
  })

  it('opens modal when comment button is clicked', () => {
    const wrapper = mount(<Comment />);
    expect(wrapper.find(Modal).prop('visible')).toBe(false)
  
    wrapper.find('button').simulate('click')
    expect(wrapper.find(Modal).prop('visible')).toBe(true)
  })
})


    
    
    

