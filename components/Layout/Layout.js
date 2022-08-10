import Head from "next/head";

export default function Layout({ title, children }) {
    const defaultTitle = 'lil-m00ha blog'
    return (
        <>
            <Head>
                <title>{title ? defaultTitle + ' - ' + title : defaultTitle}</title>
                <link rel="icon" href="/parrot.png"/>
            </Head>
            
            <main>
                {children}
            </main>
        </>
    )
}