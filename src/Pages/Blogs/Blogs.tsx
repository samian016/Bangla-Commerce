import React, { useEffect, useState } from 'react'
import CountDown from '../../Components/CountDown/CountDown'
import Search from '../../Components/Search/Search';

const Blogs: React.FC = () => {
  // Count Down Timer
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerDays, setTimerDays] = useState(0);

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("March 16,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days: number = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval();
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    })
  }

  useEffect(() => {
    startTimer();
  }, [])

  return (
    <>
      <div className="container my-5">
        {/* <div>Blog Component</div> */}
        <div className='row'>
          <div className="col-md-6 mx-auto text-center d-flex justify-content-center">
            <div className="col-md-3">
              <div className=''>
                <p>{timerDays}</p>
                <small>Days</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className=''>
                <p>{timerHours}</p>
                <small>Hours</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className=''>
                <p>{timerMinutes}</p>
                <small>Minutes</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className=''>
                <p>{timerSeconds}</p>
                <small>Seconds</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Search />
    </>
  )
}

export default Blogs