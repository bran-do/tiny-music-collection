import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './LoginPage.css'

function LoginPage() {
  const { username, setUsername } = useContext(AppContext);
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  
  // If username's already set, redirects to homepage:
  useEffect(() => { username && navigate('/home') }, [username, navigate]);

  const handleChange = (event) => { setName(event.target.value) };
  const handleSubmit = () => {
    setUsername(name);
    navigate('/home');
  };

  return (
    <div className="login-container">
        <h3>What&apos;s your name?</h3>
        <form onSubmit={ handleSubmit } className='input-and-btn'>
          <input
            placeholder="Name"
            type="text"
            name="username"
            value={ name }
            onChange={ handleChange }
          />
          <button>{'>'}</button>
        </form>
    </div>
  )
}

export default LoginPage;