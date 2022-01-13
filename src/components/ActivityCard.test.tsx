import {fireEvent, render, screen, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import ActivityCard from './ActivityCard'
import { Activity } from '../models/Activity'

afterEach(cleanup)

describe('ActivityCard component', () => {

  it('renders activityCard without errors', () => {
    //smoke test
    const testData: Activity = { id: 1, title: 'Yoga', description: 'This is a yoga group', imgUrl: '', date: '', upcoming: true, passed: false }
    render(<ActivityCard activity={testData} />)
  })

  it('renders activity title, description and date', () => {
    const testData: Activity = { id: 234, title: 'Running', description: 'Running together is fun', imgUrl: '', date: '', upcoming: true, passed: false}
    render(<ActivityCard activity={testData} />)

    screen.getAllByText(testData.title, { exact: false })
    screen.getAllByText(testData.description, { exact: false })
    screen.getAllByText(testData.date, { exact: false })
  })

  it('renders image correctly with src imgUrl', () => {
    const testData: Activity = { id: 24, title: '', description: '', imgUrl: 'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', date: '', upcoming: true, passed: false}
    const { getByAltText } = render (<ActivityCard  activity={testData} />)
    const image = getByAltText('pictures of activitis')
    
    expect(image).toHaveAttribute('src', 'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
  })

  it('displays group size', () => {
    const testData: Activity = { id: 7, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }
    
    render(<ActivityCard activity={testData} />)

    expect(screen.getByTestId('groupSize')).toHaveTextContent('Group Size: 20 members.')
  })

  it('displays place remain', () => {
    const testData: Activity = { id: 7, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }
    
    render(<ActivityCard activity={testData} />)

    expect(screen.getByTestId('placeRemain')).toHaveTextContent('Place remain')
  })

  it('shows register button responding correctly', () => {
    const testData: Activity = { id: 8, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }
    
    render(<ActivityCard activity={testData} />, )
    const button = screen.getByTestId('registerBtn')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Registered!')
  })

  it('shows correct number on place remain after register button clicked', () => {
    const testData: Activity = { id: 9, title: '', description: '', imgUrl: '', date: '', upcoming: true, passed: false }
    
    render(<ActivityCard activity={testData} />, )
    const button = screen.getByTestId('registerBtn')

    fireEvent.click(button)

    expect(screen.getByTestId('mutable-num').textContent).toBe("19")
    expect(button).toHaveTextContent('Registered!')
    expect(button).toBeDisabled()
  })

  it('test child component <Comment />', () => {
    
    const testData: Activity = { id: 1, title: 'Yoga', description: 'This is a yoga group', imgUrl: '', date: '', upcoming: true, passed: false }
    const { getByText, getByTestId } = render(<ActivityCard activity={testData} />)
  
    expect(getByText(/comment/i)).toBeInTheDocument()
    expect(getByTestId('comment-com')).toBeInTheDocument()
  })
  
  it('test child component <Rate />', () => {
    
    const testData: Activity = { id: 1, title: 'Yoga', description: 'This is a yoga group', imgUrl: '', date: '', upcoming: true, passed: false }
    const { getByTestId } = render(<ActivityCard activity={testData} />)
  
    expect(getByTestId('rating-com')).toBeInTheDocument()
  })

})
