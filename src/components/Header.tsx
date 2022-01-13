import '../App.css'
import logo from '../world-map-withgreetings.svg'
import { FaSistrix } from "react-icons/fa"
import CreateGroupForm from './CreateGroupForm'


interface Props {
  searchText: string
  setSearchText: (search: string) => void
}

const Header = ({ searchText, setSearchText }: Props) => {
  return(
    <div className="App">
      <header className="App-header">
        <h1 data-testid="test-title" className="title">MeetUp</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="text">
          <span style={{color: 'tomato'}}>O</span>rganize your meet up events online or offline with people from over the world!
        </h3>
        <CreateGroupForm />
       
        <h3><span style={{color: 'tomato'}}>O</span>r join a group that fits your interest!</h3>
        <div>
          <input className="search-input-test" type="text" value={searchText} onChange={event => setSearchText(event.target.value)} placeholder='Search for "Hiking"' />
          <FaSistrix className="magnify-search" />
        </div>
      </header>
    </div>
  )
}

export default Header
        
        
