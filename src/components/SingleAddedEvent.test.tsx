import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import SingleAddedEvent from './SingleAddedEvent'
import { Activity } from '../models/Activity'

afterEach(cleanup)

describe('SingleAddedEvent component', () => {
  it('renders without errors', () => {
    const testData: Activity = { id: 1, title: 'Yoga', description: 'This is a yoga group', imgUrl: '', date: '', upcoming: true, passed: false }
    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)
  })

  it('renders add event title, description and date', () => {
    const testData: Activity = { id: 234, title: 'Running', description: 'Running together is fun', imgUrl: '', date: '', upcoming: true, passed: false }
    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)

    screen.getAllByText(testData.title, { exact: false })
    screen.getAllByText(testData.description, { exact: false })
    screen.getAllByText(testData.date, { exact: false })
  })

  it('renders image correctly with src imgUrl', () => {
    const imgUrl = 'https://images.unsplash.com/photo-1628960198207-31651a838567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
    const testData: Activity = { id: 24, title: '', description: '', imgUrl: imgUrl, date: '', upcoming: true, passed: false }
    const { getByAltText } = render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)
    const image = getByAltText('Event pictures')

    expect(image).toHaveAttribute('src', imgUrl)
  })

  it('displays group size', () => {
    const testData: Activity = { id: 7, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }

    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)

    expect(screen.getByTestId('groupSize')).toHaveTextContent('Group Size: 20 members.')
  })

  it('displays place remain', () => {
    const testData: Activity = { id: 7, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }

    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)

    expect(screen.getByTestId('placeRemain')).toHaveTextContent('Place remain')
  })

  it('shows register button responding correctly', () => {
    const testData: Activity = { id: 8, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }

    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)
    const cancelBtn = screen.getByTestId('cancel-btn')
    const registerBtn = screen.getByTestId('registerBtn')

    fireEvent.click(registerBtn)

    expect(registerBtn).toHaveTextContent('Registered!')
    expect(cancelBtn).toHaveTextContent('Cancel')
  })

  it('shows correct number on place remain after register button clicked', () => {
    const testData: Activity = { id: 9, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }

    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)
    const button = screen.getByTestId('registerBtn')

    fireEvent.click(button)

    expect(screen.getByTestId('mutable-num').textContent).toBe("19")
    expect(button).toHaveTextContent('Registered!')
    expect(button).toBeDisabled()
  })

  it('test child component <Comment />', () => {

    const testData: Activity = { id: 1, title: 'Yoga', description: 'This is a yoga group', imgUrl: '', date: '', upcoming: true, passed: false }
    const { getByText, getByTestId } = render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)

    expect(getByText(/comment/i)).toBeInTheDocument()
    expect(getByTestId('comment-com')).toBeInTheDocument()
  })

  it('renders child component <Rate />', () => {

    const testData: Activity = { id: 1, title: 'Yoga', description: 'This is a yoga group', imgUrl: '', date: '', upcoming: true, passed: false }
    const { getByTestId } = render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)

    expect(getByTestId('rating-com')).toBeInTheDocument()
  })

  it('shows cancel button responding correctly', () => {
    const testData: Activity = { id: 8, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }

    render(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={() => { }} />)
    const cancelBtn = screen.getByTestId('cancel-btn')
    const registerBtn = screen.getByTestId('registerBtn')

    fireEvent.click(cancelBtn)

    expect(cancelBtn).toHaveTextContent('Cancelled!')
    expect(registerBtn).toHaveTextContent('Register')
    expect(screen.getByTestId('mutable-num').textContent).toBe("20")
  })

  it('shows delete button responding correctly on button click with event title', () => {
    const deleteAddedEventMock = jest.fn()
    const testData: Activity = { id: 8, title: 'Yoga', description: '', imgUrl: '', date: '', upcoming: true, passed: false }
    const wrapper = mount(<SingleAddedEvent singleAddedEvent={testData} deleteAddedEvent={deleteAddedEventMock} />)
    const deleteBtn = wrapper.find('.delete-test')

    deleteBtn.simulate('click')

    expect(deleteAddedEventMock).toHaveBeenCalled()
    expect(deleteAddedEventMock).toHaveBeenCalledWith('Yoga')
  })
})