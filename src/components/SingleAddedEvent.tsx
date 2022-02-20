import { useState, useCallback } from "react"
import { Activity } from "../models/Activity"
import { Rate } from 'antd'
import Comment from './Comment'

interface Props {
  singleAddedEvent: Activity
  deleteAddedEvent(addedEventToDelete: string): void
}

const SingleAddedEvent = ({ singleAddedEvent, deleteAddedEvent }: Props) => {
  const [peopleRegistred, setPeopleRegistred] = useState<number>(20)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const toggleRegistration = useCallback(() => setIsDisabled(!isDisabled), [isDisabled, setIsDisabled])
  const [isDisabled2, setIsDisabled2] = useState<boolean>(false)

  const handleButtonClick = () => {
    setPeopleRegistred(peopleRegistred - 1)
    setIsDisabled(true)
    setIsDisabled2(false)
  }

  const cancelRegistration = () => {
    setIsDisabled2(true)
    setPeopleRegistred(20)
    toggleRegistration()
  }
  const imgUrl = 'https://images.unsplash.com/photo-1628960198207-31651a838567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'


  return (
    <div className='activityCard'>
      <div style={{ fontSize: 18, backgroundColor: 'green', color: 'white' }}>NEW!</div>
      <img
        className="image"
        src={imgUrl}
        alt="Event pictures"
      />
      <h3 className='new-title'>{singleAddedEvent.title}</h3>
      <h4>{singleAddedEvent.date}</h4>
      <div className='new-description'>{singleAddedEvent.description}</div>
      <p data-testid="groupSize">Group Size: 20 members. </p>
      <p data-testid="placeRemain">
        Place remain: <span style={{ fontSize: 18, color: "tomato" }} data-testid="mutable-num">{peopleRegistred}</span>
      </p>
      <button
        disabled={isDisabled}
        onClick={handleButtonClick}
        className="register"
        data-testid="registerBtn"
      >
        {isDisabled ? 'Registered!' : 'Register'}
      </button>
      <br />
      <button
        disabled={isDisabled2}
        onClick={cancelRegistration}
        data-testid="cancel-btn"
        style={{ backgroundColor: "red", margin: 5 }}
      >
        {isDisabled2 ? 'Cancelled!' : 'Cancel'}
      </button>
      <br />
      <span data-testid="rating-com"><Rate /></span>
      <br />
      <span data-testid="comment-com"><Comment /></span>
      <button
        className="delete-test"
        style={{
          backgroundColor: 'red',
          margin: 20
        }}
        onClick={() => {
          deleteAddedEvent(singleAddedEvent.title)
        }}
        data-testid="delete-btn"
      >
        Delete Event
      </button>
    </div>
  )
}

export default SingleAddedEvent