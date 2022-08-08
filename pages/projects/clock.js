import Layout from "../../components/Layout/Layout";
import style from "../../styles/clock.module.css";
import {useEffect, useRef} from "react";

export default function Clock() {
    const secondHand = useRef();
    const minuteHand = useRef();
    const hourHand = useRef();
    
    function getDate () {
        const current = new Date(),
              midnight = new Date(
                  current.getFullYear(),
                  current.getMonth(),
                  current.getDate(),
                  0,0,0),
              msec = current.getTime() - midnight.getTime();
        
        let sec = Math.floor((msec / 1000)),
            min = Math.floor((msec / 1000 / 60)),
            hr = Math.floor((msec/ 1000 / 60 / 60));
        
        let secDeg = (sec * 6);
        secondHand.current.style.transform = `rotate(${secDeg}deg)`;
        let minDeg = min * 6;
        minuteHand.current.style.transform = `rotate(${minDeg}deg)`;
        let hrDeg = hr * 30 + (hr / 2);
        hourHand.current.style.transform = `rotate(${hrDeg}deg)`;
    }
    
    useEffect(() => {
        getDate();
        const clock = setInterval(getDate, 1000);
        return () => clearInterval(clock);
    }, [])
    
    return (
        <Layout title='Clock'>
            <section className={style.container}>
                <div className={style.clock}>
                    <div className={style.clockBack}></div>
                    <div className={style.clockFace}>
                        <div className={`${style.hand} ${style.hourHand}`} ref={hourHand}></div>
                        <div className={`${style.hand} minute-hand`} ref={minuteHand}></div>
                        <div className={`${style.hand} ${style.secondHand}`} ref={secondHand}></div>
                        <div className={`${style.center}`}></div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}