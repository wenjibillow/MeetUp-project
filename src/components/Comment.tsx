import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';

const Comment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  
  const success = () => {
    Modal.success({
      content: 'Comment sent successfully!',
    })
  }
  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
    success()
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <Button data-testid="antd-button" type="text" style={{color:"blue", fontSize:"10px"}} onClick={showModal}>
        Comment
      </Button>
      <Modal data-testid="antd-modal" title="Comment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>User Comment: {inputValue}</p>
        <Input.TextArea data-testid="comment-input" placeholder="Write your comment here..." value={inputValue}
          onChange={(e) => handleChange(e)} />
      </Modal>
    </>
  );
};

export default Comment
      
