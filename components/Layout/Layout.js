import Head from "next/head";

export default function Layout({ title, children }) {
    const defaultTitle = 'Sia N.M.'
    return (
        <>
            <Head>
                <title>{title ? defaultTitle + ' ' + title : defaultTitle}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            
            <main>
                {children}
            </main>
    
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </>
    )
}