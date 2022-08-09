import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <Layout>
            <section>
                <Link href="./projects/clock">
                    <a>Clock</a>
                </Link>
            </section>
            <section>
                <Link href="./projects/css-variables">
                    <a>CSS Variables</a>
                </Link>
            </section>
        </Layout>
    )
}