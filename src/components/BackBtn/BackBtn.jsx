import { useNavigate } from "react-router-dom";

import './BackBtn.css'

function BackBtn() {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={ () => navigate(-1) }>
      { '<' }
    </button>
  )
}

export default BackBtn;