import { useState, useCallback } from "react"
import { Activity } from '../models/Activity'
import '../App.css'
import { Rate } from 'antd'
import Comment from './Comment'


interface Props {
  activity: Activity
}

const ActivityCard = ({ activity }: Props): JSX.Element => {

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


  return (
    <section className="activityCard" data-testid="create-group-btn" >
      <img className="image" src={activity.imgUrl} alt="pictures of activitis" />
      <h3>{activity.title}</h3>
      <p>{activity.date}</p>
      <p>{activity.description}</p>
      <p data-testid="groupSize">Group Size: 20 members. </p>
      <p data-testid="placeRemain">Place remain: <span style={{ fontSize: 18, color: "tomato" }} data-testid="mutable-num">{peopleRegistred}</span></p>
      <button disabled={isDisabled} onClick={handleButtonClick} className="register" data-testid="registerBtn">{isDisabled ? 'Registered!' : 'Register'}</button><br />
      <button disabled={isDisabled2} onClick={cancelRegistration} style={{ backgroundColor: "red", margin: 5 }}>{isDisabled2 ? 'Cancelled!' : 'Cancel'}</button><br />
      <span data-testid="rating-com"><Rate /></span><br />
      <span data-testid="comment-com"><Comment /></span>
    </section>
  )
}

export default ActivityCard


