import { useState } from 'react';
import './LoginPage.css'

import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const handleChange = (event) => { setUsername(event.target.value) };
  const handleSubmit = () => { navigate('/home') };

  return (
    <div className="login-container">
        <h3>What&apos;s your name?</h3>
        <form onSubmit={ handleSubmit } className='input-and-btn'>
          <input
            placeholder="Name"
            type="text"
            name="username"
            value={ username }
            onChange={ handleChange }
          />
          <button>{'>'}</button>
        </form>
    </div>
  )
}

export default LoginPage;