import '../App.css'
import { FaSistrix } from "react-icons/fa"


interface Props {
  searchText: string
  setSearchText: (search: string) => void
}

const Header = ({ searchText, setSearchText }: Props) => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="test-title" className="title">MeetUp</h1>
        <img
          src={'https://images.unsplash.com/photo-1504020308841-1fdd7e4f609f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2838&q=80'}
          className="App-logo"
          alt="logo"
        />
        <h3 className="text">
          <span style={{ color: 'tomato' }}>O</span>rganize your meet up events online or offline with people from over the world!
        </h3>
        <h3>
          <span style={{ color: 'tomato' }}>O</span>r join a group that fits your interest!
        </h3>
        <div>
          <input className="search-input-test" type="text" value={searchText} onChange={event => setSearchText(event.target.value)} placeholder='Search for "Hiking"' />
          <FaSistrix className="magnify-search" />
        </div>
      </header>
    </div>
  )
}

export default Header


