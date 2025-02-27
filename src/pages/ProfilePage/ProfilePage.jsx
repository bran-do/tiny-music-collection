import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import PageHeader from '../../components/PageHeader/PageHeader';

import profileCircleIcon from '../../assets/icons/user-circle.svg'

import './ProfilePage.css'

function ProfilePage() {
  const {
    username,
    setUsername, 
    setCollection,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername('');
    setCollection([]);
    navigate('/');
  }

  return (
    <>
      <PageHeader pageTitle={ "Profile" } />
      <div className='profile-container'>
        <div className='profile-icon-and-username'>
          <img src={ profileCircleIcon } alt="Profile icon" width="80px"/>
          <h3>{ username }</h3>
        </div>

        <nav className='profile-button-menu'>
          <button 
            className='profile-logout-button'
            onClick={ handleLogout }
          >
            Logout
          </button>
        </nav>
        </div>
    </>
  )
}

export default ProfilePage;