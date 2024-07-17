import { Route, Routes } from 'react-router-dom';

import TopBar from '../../../components/TopBar/TopBar';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import HomePage from '../../../pages/HomePage/HomePage';
import CollectionPage from '../../../pages/CollectionPage/CollectionPage';
import ProfilePage from '../../../pages/ProfilePage/ProfilePage';

import './Screen.css'
import SearchPage from '../../../pages/SearchPage/SearchPage';
import AlbumPage from '../../../pages/AlbumPage/AlbumPage';

function Screen() {
  return (
    <div className="screen">
      <TopBar />
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/collection" element={ <CollectionPage /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/search" element={ <SearchPage /> } />
        <Route path="/album/:id" element={ <AlbumPage /> } />
      </Routes>
    </div>
  )
}

export default Screen;