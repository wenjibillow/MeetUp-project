import { render, cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'
import CardGrid from './CardGrid'
import ActivityCard from './ActivityCard'

afterEach(cleanup)

describe('CardGrid component', () => {
  it('renders without errors', () => {
    render(<CardGrid searchString="" />)
  })

  it('renders title (All Events)', () => {
    const { getByText } = render(<CardGrid searchString="" />)

    expect(getByText(/all events/i)).toBeInTheDocument() 
  })

  it('renders title (Upcoming Events)', () => {
    const { getByText } = render(<CardGrid searchString="" />)

    expect(getByText(/upcoming events/i)).toBeInTheDocument() 
  })

  it('renders title (Past Events)', () => {
    const { getByText } = render(<CardGrid searchString="" />)

    expect(getByText(/past events/i)).toBeInTheDocument() 
  })

  it("renders child componemt <ActivityCard />", () => {
  const { getAllByText } = render(
    <CardGrid searchString="" />
  )

  expect(getAllByText(/yoga/i)).toBeTruthy()
  })

  it("renders all events cards from child component <ActivityCard /> into all events section", () => {
  const { getByTestId } = render(
    <CardGrid searchString="" />
  )

  expect(getByTestId('all-events')).toBeInTheDocument()
  })

  it("filters upcoming events cards from child component <ActivityCard /> into upcoming events section", () => {
  const { getByTestId } = render(
    <CardGrid searchString="" />
  )

  expect(getByTestId('upcoming-events')).toBeInTheDocument()
  })

  it("filters past event cards from child component <ActivityCard /> into past events section", () => {
  const { getByTestId } = render(
    <CardGrid searchString="" />
  )

  expect(getByTestId('passed-events')).toBeInTheDocument()
  })

  it('renders child component <ActivityCard /> correctly', ()=> {
    const wrapper = shallow(<CardGrid searchString="" />)
    
    expect(wrapper.find(ActivityCard).length).toEqual(12)
    expect(wrapper.find(ActivityCard).find('.activityCard')).toEqual({})
  })
})


