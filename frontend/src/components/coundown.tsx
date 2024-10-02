import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [period, setPeriod] = useState('AM'); // State for AM/PM

  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime(); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Update the period (AM/PM)
      if (hours >= 12) {
        setPeriod('PM');
      } else {
        setPeriod('AM');
      }

      if (difference > 0) {
        // Adjust hours to 12-hour format
        const adjustedHours = hours % 12 || 12; // Convert 0 to 12
        setTimeLeft({ days, hours: adjustedHours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsTimeUp(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Function to add leading zero if number is less than 10
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="text-center">
      {!isTimeUp ? (
        <div className="timer_seting_fl">
          {timeLeft.days > 0 && (
            <div className="box_Set_timer flex flex-col items-center set_font_size">
              <span className="">{formatTime(timeLeft.days)}</span>
              <span>Days</span>
            </div>
          )}
          {(timeLeft.hours > 0 || timeLeft.days > 0) && (
            <div className="box_Set_timer flex flex-col items-center set_font_size">
              <span className="">{formatTime(timeLeft.hours)} <p className="period_am_pm">{period}</p></span>
              <span>Hours</span>
            </div>
          )}
          {(timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0) && (
            <div className="box_Set_timer flex flex-col items-center set_font_size">
              <span className="">{formatTime(timeLeft.minutes)}</span>
              <span>Minutes</span>
            </div>
          )}
          <div className="box_Set_timer flex flex-col items-center set_font_size">
            <span className="">{formatTime(timeLeft.seconds)}</span>
            <span>Seconds</span>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-bold mt-4">Time's Up!</h2>
      )}
    </div>
  );
};

export default CountdownTimer;
