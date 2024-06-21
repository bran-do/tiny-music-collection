import { useEffect, useState } from "react"

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <div className="top-bar">
        <span className="hour">
          {
            time.toLocaleTimeString(
              'en-US',
              {hour: 'numeric', minute: 'numeric'}
            )
          }
        </span>
        
        <span className="day">
          {
            time.toLocaleDateString(
              'en-US',
              {weekday: 'short', day: 'numeric', month: 'short' }
            )
          }
        </span>
    </div>
  )
}

export default Time;