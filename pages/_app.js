import { useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);
    
    return (
        <>
            <Head>
                <title>Anamidev - mini projects</title>
                <link rel="apple-touch-icon" sizes="96x96" href="/favicon/icons8-code-gradient-96.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon/icons8-code-gradient-96.png"/>
                <link rel="manifest" href="/favicon/manifest.json"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;