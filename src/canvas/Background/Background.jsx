import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/animation/fumaça.json'


import Device from '../Device/Device';
import './Background.css'

function Background() {
  return (
    <div className='background'>
      <div className='lottie-background'>
      <Player
        autoplay
        loop
        src={animationData}
        className='lottie-animation'
        style={{ position: 'fixed', margin: '0', width: '1920px', objectFit: 'cover', opacity: '60%' }}
      >
      </Player>
    </div>
    <div className="device-container">
      <Device />
    </div>
    </div>
  )
}

export default Background;