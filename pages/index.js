import Link from "next/link";

export default function Home() {
    return (
        <>
            <section>
                <div>
                    <Link href="./projects/drawing-canvas">
                        <a>Drawing canvas</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/countdown-timer">
                        <a>Countdown Timer</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/whack-a-mole">
                        <a>Whack A Mole</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/webcam-filter">
                        <a>Webcam Filter</a>
                    </Link>
                </div>
            </section>
            
            <style jsx global>{`
                body {
                    background: #18171c;
                    font-size: 24px;
                    margin:0 5%;
                    font-family: 'Roboto mono', monospace;
                    color: #a29d9d;
                }
                
                a {
                    text-decoration: none;
                    color: #F9F1F0;
                    transition: all 0.125s linear;
                }
                
                a:hover {
                    position: relative;
                    padding: 0 5px;
                    color: #e3a59d;
                }
                
                a:hover:before {
                    content: "";
                    z-index: -1;
                    left: 0em;
                    top: 0.2em;
                    border-width: 2px;
                    border-style: solid;
                    border-color: #e3a59d;
                    position: absolute;
                    border-right-color: transparent;
                    width: 100%;
                    height: 1em;
                    transform: rotate(2deg);
                    opacity: 0.5;
                    border-radius: 0.35em;
                }
                
                a:hover:after {
                    content: "";
                    z-index: -1;
                    left: 0em;
                    top: 0.2em;
                    border-width: 2px;
                    border-style: solid;
                    border-color: #e3a59d;
                    border-left-color: transparent;
                    border-top-color: transparent;
                    position: absolute;
                    width: 100%;
                    height: 1em;
                    transform: rotate(1deg);
                    opacity: 0.5;
                    border-radius: 0.35em;
                }
            `}</style>
        </>
    )
}