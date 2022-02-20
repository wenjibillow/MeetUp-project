import ActivityCard from "./ActivityCard"
import { Activity } from "../models/Activity"

const data: Activity[] = [
  {
    id: 1,
    title: 'Yoga',
    description: 'Join us! Practicing yoga in a group is fun',
    imgUrl: 'https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    date: "Mon,FEB 1 @1:00 AM CET",
    upcoming: true,
    passed: false
  },
  {
    id: 2,
    title: 'Hiking',
    description: 'Join us! Hiking in a group is fun',
    imgUrl: 'https://images.unsplash.com/photo-1599828586134-fbaff96c63d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    date: "Wed,MAR 5 @12:00 AM CET",
    upcoming: true,
    passed: false
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Learning photography in a group is fun',
    imgUrl: 'https://images.unsplash.com/photo-1607010063495-a18e40ec6ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80',
    date: "Mon,FEB 12 @9:00 AM CET",
    upcoming: true,
    passed: false
  },
  {
    id: 4,
    title: 'Friendship',
    description: 'For lonely people to get to know each other',
    imgUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    date: "Fri,APR 3 @5:00 PM CET",
    upcoming: true,
    passed: false
  },
  {
    id: 5,
    title: 'IT maniac',
    description: 'Let us talk about IT...',
    imgUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    date: "Mon,DEC 1 @1:00 AM CET",
    upcoming: false,
    passed: true
  },
  {
    id: 6,
    title: 'Book Club',
    description: 'Reading together is fun',
    imgUrl: 'https://images.unsplash.com/photo-1560976812-c82dea2b08e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    date: "Sun,NOV 1 @2:00 PM CET",
    upcoming: false,
    passed: true
  },
]

interface Props {
  searchString: string
}

const CardGrid = ({ searchString }: Props) => {
  const filteredData = data.filter(activity => activity.title.toLowerCase().includes(searchString.toLowerCase()))

  return (
    <>

      <h4 style={{ color: 'tomato', marginTop: 50 }}>All Events</h4>
      <section data-testid="all-events" className="card-grid">
        {filteredData.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </section>


      <h4 style={{ color: 'tomato' }}>Upcoming Events</h4>
      <section data-testid="upcoming-events" className="card-grid">
        {data
          .filter((item) => item.upcoming === true)
          .map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
      </section>


      <h4 style={{ color: 'tomato' }}>Past Events</h4>
      <section data-testid="passed-events" className="card-grid">
        {data
          .filter((item) => item.passed === true)
          .map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
      </section>

    </>
  )
}

export default CardGrid
