import { useState } from 'react'
import './App.css'
import AppContext from './context/AppContext';
import SearchContext from './context/SearchContext';
import Background from './canvas/Background/Background';

function App() {
  const [username, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  return (
    <AppContext.Provider value={ { username, setUsername } }>
      <SearchContext.Provider value={
        {
          searchTerm,
          searchResult,
          setSearchTerm,
          setSearchResult,
        } 
      }>
        <Background />
      </SearchContext.Provider>
    </AppContext.Provider>
  )
}

export default App
