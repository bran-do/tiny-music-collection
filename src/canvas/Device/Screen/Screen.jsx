import { Route, Routes } from 'react-router-dom';
import TopBar from '../../../components/TopBar/TopBar';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import HomePage from '../../../pages/HomePage/HomePage';
import './Screen.css'

function Screen() {
  return (
    <div className="screen">
      <TopBar />
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/home" element={ <HomePage /> } />
      </Routes>
    </div>
  )
}

export default Screen;