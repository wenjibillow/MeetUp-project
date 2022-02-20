import React, { useState, ChangeEvent } from 'react'
import { Modal, Button, Input } from 'antd'
import { Activity } from "../models/Activity"
import '../App.css'
import SingleAddedEvent from './SingleAddedEvent'

const AddEvent = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const date = new Date().toLocaleDateString()
  const upcoming = true
  const passed = false
  const imgUrl = 'https://images.unsplash.com/photo-1628960198207-31651a838567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
  const [addedEventList, setAddedEventList] = useState<Activity[]>([])

  const showModal = () => {
    setIsModalVisible(true);
  }

  const success = () => {
    Modal.success({
      content: 'Event added!',
    })
  }

  const handleOk = (): void => {
    const newEvent = { id: id, title: title, description: description, imgUrl: imgUrl, upcoming: upcoming, passed: passed, date: date }
    setAddedEventList([...addedEventList, newEvent])
    setId(0)
    setTitle('')
    setDescription('')
    setIsModalVisible(false)
    success()
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "id") {
      setId(Number(e.target.value))
    } else if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDescription(e.target.value)
    }
  }

  const deleteAddedEvent = (addedEventToDelete: string): void => {
    setAddedEventList(
      addedEventList.filter((addedEvent) => {
        return addedEvent.title !== addedEventToDelete
      })
    )
  }


  return (
    <div>
      <div>
        <Button
          data-testid="antd-button"
          type="text"
          className='add-event-btn'
          onClick={showModal}
        >
          Add Event
        </Button>
        <Modal
          data-testid="antd-modal"
          title="Add Event"
          className='form-modal'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            type="number"
            className='id-input'
            data-testid="id-add-event"
            placeholder="any number..."
            name="id"
            value={id}
            onChange={handleChange}
          />
          <Input
            type="text"
            className='title-input'
            data-testid="title-add-event"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
          <Input
            type="date"
            className='date-picker'
            id="birthday"
            name="date"
          // value=""
          />
          <Input
            type="text"
            className='description-input'
            data-testid="description-add-event"
            placeholder="Event description..."
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Modal>
      </div>
      <h4 style={{ color: 'tomato' }}>Event added today!</h4>
      <div className='card-grid' data-testid='added-event-list'>
        {addedEventList.map((event: Activity, key: number) => {
          return < SingleAddedEvent key={id} singleAddedEvent={event} deleteAddedEvent={deleteAddedEvent} />
        })}
      </div>
    </div>
  )
}

export default AddEvent