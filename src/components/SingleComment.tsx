import React from 'react'
import { CommentInterf } from '../models/CommentInterf'

interface Props {
  singleComment: CommentInterf
  deleteComment(commentToDelete: string): void
}

const SingleComment = ({ singleComment, deleteComment }: Props) => {
  return (
    <div className='singleComment'>
      <div className='content'>
        <span className='username'>{singleComment.userName}</span>
        <span className='commentItem'>{singleComment.comment}</span>
      </div>
      <button
        className='delete-comment'
        onClick={() => {
          deleteComment(singleComment.comment)
        }}
      >
        x
      </button>
    </div>
  )
}

export default SingleComment