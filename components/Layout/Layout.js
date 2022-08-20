import Head from "next/head";

export default function Layout({ title, children }) {
    const defaultTitle = 'lil-m00ha blog'
    return (
        <>
            <Head>
                <title>{title ? defaultTitle + ' - ' + title : defaultTitle}</title>
                <link rel="icon" href="/parrot.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            
            <main>
                {children}
            </main>
        </>
    )
}