import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <>
            <Layout>
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
                </section>
            </Layout>
            
            <style jsx global>{`
                body {
                    background: black;
                    font-size: 24px;
                }
                
                :root{
                    font-family:sans-serif;
                    font-size:20px;
                    margin:0 5%;
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
                    border-radius: 0.25em;
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
                    transform: rotate(-1deg);
                    opacity: 0.5;
                    border-radius: 0.25em;
                }
            `}</style>
        </>
    )
}