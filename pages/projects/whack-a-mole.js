import {useEffect, useRef, useState} from "react";

export default function WhackAMole() {
    const holesRef = useRef(new Array(6).fill(null));
    const [scoreBoard, setScoreBoard] = useState(0);
    let lastHole;
    let timeUp = false;
    let timeoutId_peep;
    let timeoutId_startGame;
    
    function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    
    function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) {
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }
    
    function peep() {
        const time = randomTime(200, 1000);
        const hole = randomHole(holesRef.current);
        hole.classList.add('up');
        timeoutId_peep = setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) peep();
        }, time);
    }
    
    function startGame() {
        setScoreBoard(0);
        timeUp = false;
        peep();
        timeoutId_startGame = setTimeout(() => timeUp = true, 10000)
    }
    
    function bonk(e) {
        if(!e.isTrusted) return;
        setScoreBoard(prev => prev + 1);
        e.target.parentNode.classList.remove('up');
    }
    
    useEffect(() => () => {
        clearTimeout(timeoutId_peep);
        clearTimeout(timeoutId_startGame);
    }, [])
    
    return (
        <>
            <h1>
                <span>Whack-a-mole!</span>
                <span className="score">{scoreBoard}</span>
            </h1>
            
            <div className="container">
                <div className="row justify-content-md-center">
                    <button className="btn btn-light btn-start col-md-auto" onClick={startGame}>Start!</button>
                </div>
            </div>

            <div className="game">
                {holesRef.current.map((el, i)=> (
                    <div className={`hole hole${i + 1}`} ref={r => holesRef.current[i] = r} key={i}>
                        <div className="mole" onClick={bonk}></div>
                    </div>
                ))}
            </div>
            
            <style jsx global>{`
                body {
                    font-family: 'Amatic SC', cursive;
                    background: #ffc600;
                }
                
                h1 {
                    text-align: center;
                    font-size: 10rem;
                    margin-bottom: 8px;
                }
                
                .btn-start {
                    font-size: 28px;
                }
                
                .score {
                    background: rgba(255,255,255,0.2);
                    padding: 0 3rem;
                    line-height: 1;
                    border-radius: 1rem;
                }
                
                .game {
                    width: 600px;
                    height: 400px;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 auto;
                }
                
                .hole {
                    flex: 1 0 33.33%;
                    overflow: hidden;
                    position: relative;
                }
                
                .hole:after {
                    display: block;
                    background: url(/whack-a-mole/dirt.svg) bottom center no-repeat;
                    background-size: contain;
                    content: '';
                    width: 100%;
                    height:70px;
                    position: absolute;
                    z-index: 2;
                    bottom: -30px;
                }
                
                .mole {
                    background: url('/whack-a-mole/mole.svg') bottom center no-repeat;
                    background-size: 60%;
                    position: absolute;
                    top: 100%;
                    width: 100%;
                    height: 100%;
                    transition:all 0.4s;
                }
                
                .hole.up .mole {
                    top: 0;
                }
            `}</style>
        </>
    )
}