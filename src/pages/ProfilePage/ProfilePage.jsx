import BackBtn from '../../components/BackBtn/BackBtn';

import './ProfilePage.css'

function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <BackBtn />
        <header>Profile</header>
      </div>
    </div>
  )
}

export default ProfilePage;