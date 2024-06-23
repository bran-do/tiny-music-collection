import { Player } from '@lottiefiles/react-lottie-player';
import animation from './animation/Animacao_fundoIpod (1).json'

import Device from '../Device/Device';
import './Background.css'

function Background() {

  return (
    <>
    <div className='lottie-background'>
      <Player
        autoplay
        loop
        src={animation}
        className='lottie-animation'
      >
      </Player>
    </div>
    <div className="device-container">
      <Device />
    </div>
    </>
  )
}

export default Background;