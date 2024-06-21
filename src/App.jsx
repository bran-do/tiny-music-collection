import { useState } from 'react'
import './App.css'
import Device from './canvas/Device/Device'
import AppContext from './context/AppContext';
import SearchContext from './context/SearchContext';


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
        <Device />
      </SearchContext.Provider>
    </AppContext.Provider>
  )
}

export default App
