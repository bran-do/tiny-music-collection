import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import PageHeader from '../../components/PageHeader/PageHeader';

import profileCircleIcon from '../../assets/icons/user-circle.svg'

import './ProfilePage.css'

function ProfilePage() {
  const appContext = useContext(AppContext);

  return (
    <>
      <PageHeader pageTitle={ "Profile" } />
      <div className='profile-container'>
        <div className='profile-icon-and-username'>
          <img src={ profileCircleIcon } alt="Profile icon"/>
          <h2>{ appContext.username }</h2>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;