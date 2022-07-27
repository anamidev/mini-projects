import Head from 'next/head';
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Head>
                <title>lil-m00ha blog</title>
                <link rel="icon" href="/parrot.png"/>
            </Head>
            
            <main>
                <header>
                    <h2>Welcome to the BLOG!</h2>
                    <p>Different kind of articles can be found here</p>
                </header>
                
                <section>
                    <Link href="/posts/1">
                        <a>
                            <article>
                                <h3>First post header</h3>
                                <p>First post description</p>
                            </article>
                        </a>
                    </Link>
                    
                    <article>
                        <h3>Second post header</h3>
                        <p>Second post description</p>
                    </article>
                </section>
                
                <footer>
                    footer info
                </footer>
            </main>
        </div>
    )
}