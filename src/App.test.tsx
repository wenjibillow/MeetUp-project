import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import App from './App'
import CardGrid from './components/CardGrid'

afterEach(cleanup)

describe('App component', () => {
	
	it('renders without errors', () => {
		render(<App />)
	})
})

describe('App component (integration)', () => {

	it('renders CardGrid initially', () => {
		const wrapper = mount(<App />)
		const actual = wrapper.contains(<CardGrid searchString="" />)
		expect(actual).toBe(true)
	})

	it('renders Header initially', () => {
		const wrapper = mount(<App />)
		const header = wrapper.find('.header-test')
		expect(header).toHaveLength(1)
	})

	it('renders Footer initially', () => {
		render(<App />)
		expect(screen.getByTestId('footer-test')).toHaveTextContent('WTech © 2022')
	})

	it('shows matching Card when typing in the search field', () => {
	const wrapper = mount(<App />)
	
	const searchString = 'Yoga'
	const input = wrapper.find('header input')
	input.simulate('change', { target: { value: searchString } })

	const cards = wrapper.find('section.card-grid .activityCard')
	const titles = cards.find('h3')
	expect(titles.length).toBe(7)
  })
})

