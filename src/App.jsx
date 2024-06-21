import { useState } from 'react'
import './App.css'
import Device from './canvas/Device/Device'
import AppContext from './context/AppContext'

function App() {
  const [username, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AppContext.Provider value={ {
      username,
      searchTerm,
      setUsername,
      setSearchTerm,

    } }>
      <Device />
    </AppContext.Provider>
  )
}

export default App
