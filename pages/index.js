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
            </section>
            
            <style jsx global>{`
                body {
                    background: black;
                    font-size: 24px;
                    margin:0 5%;
                    font-family:sans-serif;
                }
                p {
                    padding:10px;
                    font-size: 35px;
                }
                
                a {
                    text-decoration: none;
                    color: #2fe1b0;
                }
                
                a:hover {
                    position: relative;
                    padding: 0 5px;
                }
                
                a:hover:before {
                    content: "";
                    z-index: -1;
                    left: 0em;
                    top: 0em;
                    border-width: 2px;
                    border-style: solid;
                    border-color: #8fff00;
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
                    top: 0em;
                    border-width: 2px;
                    border-style: solid;
                    border-color: #8fff00;
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