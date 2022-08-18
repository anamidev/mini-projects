import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <Layout>
            <nav></nav>
            <section id="projects_list">
                <div>
                    <Link href="./projects/clock">
                        <a>Clock</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/css-variables">
                        <a>CSS Variables</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/image-gallery">
                        <a>Image gallery</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/drawing-board">
                        <a>Drawing board</a>
                    </Link>
                </div>
                <div>
                    <Link href="./projects/./custom-video-player">
                        <a>Custom Video player</a>
                    </Link>
                </div>
            </section>
        </Layout>
    )
}