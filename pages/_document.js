import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Amatic+SC:400,700' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css2?family=Nunito&display=swap' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' rel='stylesheet' type='text/css' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}