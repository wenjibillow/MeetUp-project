import React from 'react'
import { useState } from 'react';
import './App.css'

import Header from './components/Header'
import CardGrid from './components/CardGrid'
import AddEvent from './components/AddEvent';


function App() {
  const [searchString, setSearchString] = useState<string>('')

  return (
    <div className="App">
      <header className="header-test">
        <Header searchText={searchString} setSearchText={setSearchString} />
      </header>
      <main>
        <AddEvent />
        <CardGrid searchString={searchString} />
      </main>
      <footer className="App-footer" data-testid="footer-test">
        WTech &#169; 2022
      </footer>
    </div>
  );
}

export default App;
