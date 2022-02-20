import { render, screen, cleanup } from '@testing-library/react'
import { mount } from 'enzyme'
import SingleComment from './SingleComment'
import { CommentInterf } from '../models/CommentInterf'

afterEach(cleanup)

describe('SingleComment component', () => {
  it('renders without errors', () => {
    const testData: CommentInterf = { id: 1, userName: '', comment: '' }
    render(<SingleComment singleComment={testData} deleteComment={() => { }} />)
  })

  it('renders userName and comment', () => {
    const testData: CommentInterf = { id: 1, userName: 'Jonh', comment: 'Good!' }
    render(<SingleComment singleComment={testData} deleteComment={() => { }} />)

    screen.getAllByText(testData.userName, { exact: false })
    screen.getAllByText(testData.comment, { exact: false })
  })

  it('shows delete button responding correctly on button click', () => {
    const deleteCommentMock = jest.fn()
    const testData: CommentInterf = { id: 1, userName: 'Lee', comment: 'Good!' }
    const wrapper = mount(<SingleComment singleComment={testData} deleteComment={deleteCommentMock} />)

    const deleteBtn = wrapper.find('.delete-comment')
    deleteBtn.simulate('click')

    expect(deleteCommentMock).toHaveBeenCalled()
    expect(deleteCommentMock).toHaveBeenCalledWith('Good!')
  })
})