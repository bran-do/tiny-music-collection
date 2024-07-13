import { useEffect, useState } from 'react'
import './App.css'
import AppContext from './context/AppContext';
import SearchContext from './context/SearchContext';
import Background from './canvas/Background/Background';

function App() {
  const [username, setUsername] = useState(() => {
    const storedUsername = localStorage.getItem('username'); 
    return storedUsername ? storedUsername : 'user'; // Value starts as localStorage's username; otherwise, 'user'
  });

  const [collection, setCollection] = useState(() => {
    const storedCollection = JSON.parse(localStorage.getItem('collection'));
    return storedCollection ? storedCollection : []; // Value starts as localStorage's collection; otherwise, []
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  // Loading localStorage values on page refresh (and start):
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedCollection = JSON.parse(localStorage.getItem('collection'));

    if (storedUsername) { setUsername(storedUsername) }
    if (storedCollection) { setCollection(storedCollection) }
  }, [])

  // Syncing up AppContext with localStorage everytime "username" or "collection" states change:
  useEffect(() => {
    localStorage.setItem('username', username)
  }, [username]);

  useEffect(() => {
    localStorage.setItem('collection', JSON.stringify(collection));
  }, [collection]);

  return (
    <AppContext.Provider value={
      { 
        username,
        collection,
        setUsername,
        setCollection,
      }
    }>
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
