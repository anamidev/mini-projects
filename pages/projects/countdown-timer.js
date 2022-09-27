import {useEffect, useState} from "react";

export default function CountdownTimer() {
    const [timerDisplay, setTimerDisplay] = useState('');
    const [endTime, setEndTime] = useState('');
    let countdown = null;
    
    const timersList = [
        {sec: 20, label: '20 Secs'},
        {sec: 300, label: 'Work 5'},
        {sec: 900, label: 'Quick 15'},
        {sec: 1200, label: 'Snack 20'},
        {sec: 3600, label: 'Lunch Break'},
    ];
    
    function timer(seconds) {
        if (countdown) clearInterval(countdown);
        
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);
    
        countdown = (setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000));
    }
    
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
        setTimerDisplay(display);
    }
    
    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const adjustedHour = hour > 12 ? hour - 12 : hour;
        const minutes = end.getMinutes();
        setEndTime(`Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`);
    }
    
    function submitMinutes(e) {
        e.preventDefault();
        timer(e.target.minutes.value * 60);
        e.target.reset();
    }
    
    useEffect(() => () => clearInterval(countdown), [])
    return (
        <>
            <div className="timer">
                <div className="timer__controls">
                    {timersList.map((el) => (
                        <button key={el.label}
                                className="timer__button"
                                onClick={() => timer(el.sec)}>
                            {el.label}
                        </button>
                    ))}
                    <form name="customForm" id="custom"
                          onSubmit={submitMinutes}>
                        <input type="text" name="minutes" placeholder="Enter Minutes" />
                    </form>
                </div>
                <div className="display">
                    <h1 className="display__time-left">{timerDisplay}</h1>
                    <p className="display__end-time">{endTime}</p>
                </div>
            </div>
            
            <style jsx global>{`
                html {
                    box-sizing: border-box;
                    font-size: 10px;
                }
                
                *, *:before, *:after {
                    box-sizing: inherit;
                }
                
                body {
                    margin: 0;
                    text-align: center;
                    font-family: 'Inconsolata', monospace;
                    background: linear-gradient(25deg,#32b77b 0%,#17563a 50%,#000 100%);
                }
                
                .display__time-left {
                    font-weight: 100;
                    font-size: 20rem;
                    margin: 0;
                    color: white;
                    text-shadow: 4px 4px 0 rgba(0,0,0,0.05);
                }
                
                .timer {
                    display: flex;
                    min-height: 100vh;
                    flex-direction: column;
                }
                
                .timer__controls {
                    display: flex;
                }
                
                .timer__controls > * {
                    flex: 1;
                }
                
                .timer__controls form {
                    flex: 1;
                    display: flex;
                }
                
                .timer__controls input {
                    flex: 1;
                    border: 0;
                    padding: 2rem;
                }
                
                .timer__button {
                    background: none;
                    border: 0;
                    cursor: pointer;
                    color: white;
                    font-size: 2rem;
                    text-transform: uppercase;
                    background: rgba(0,0,0,0.1);
                    border-bottom: 3px solid rgba(0,0,0,0.2);
                    border-right: 1px solid rgba(0,0,0,0.2);
                    padding: 1rem;
                    font-family: 'Inconsolata', monospace;
                }
                
                .timer__button:hover,
                .timer__button:focus {
                    background: rgba(0,0,0,0.2);
                    outline: 0;
                }
                
                .display {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                
                .display__end-time {
                    font-size: 4rem;
                    color: white;
                }
            `}</style>
        </>
    )
}