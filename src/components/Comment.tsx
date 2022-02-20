import React, { useState, ChangeEvent } from 'react';
import { Modal, Button, Input } from 'antd';
import { CommentInterf } from '../models/CommentInterf'
import SingleComment from './SingleComment'

const Comment = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [userName, setUserName] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [commentList, setCommentList] = useState<CommentInterf[]>([])

  const success = () => {
    Modal.success({
      content: 'Comment sent successfully!',
    })
  }

  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = (): void => {
    const newComment = { id: id, userName: userName, comment: comment }
    setCommentList([...commentList, newComment])
    setId(0)
    setUserName('')
    setComment('')
    setIsModalVisible(false);
    success()
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "id") {
      setId(Number(e.target.value))
    } else if (e.target.name === "userName") {
      setUserName(e.target.value)
    } else {
      setComment(e.target.value)
    }
  }

  const deleteComment = (commenToDelete: string): void => {
    setCommentList(
      commentList.filter((comment) => {
        return comment.comment !== commenToDelete
      })
    )
  }

  return (
    <>
      <Button
        data-testid="antd-button"
        className='add-comment-btn'
        type="text"
        style={{ color: "blue", fontSize: "10px" }}
        onClick={showModal}
      >
        Comment
      </Button>
      <Modal
        data-testid="antd-modal"
        title="Comment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>User Comment: {comment}</p>
        <Input
          type="number"
          data-testid="id-input"
          className='id-input'
          placeholder="any number..."
          name="id"
          value={id}
          onChange={handleChange}
        />
        <Input
          type="text"
          data-testid="userName-input"
          className="userName-input"
          placeholder="userName..."
          name="userName"
          value={userName}
          onChange={handleChange}
        />
        <Input
          type="text"
          data-testid="comment-input"
          className="comment-input"
          placeholder="Write your comment here..."
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </Modal>
      <div className='commentList' data-testid="comment-array">
        {commentList.map((comment: CommentInterf, key: number) => {
          return < SingleComment key={id} singleComment={comment} deleteComment={deleteComment} />
        })}
      </div>
    </>
  );
};

export default Comment

