import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />  */}
                    {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap" rel="stylesheet" /> */}
                    <meta name="author" content="Douglas Ferreira" />
                    <meta name="robots" content="noindex, nofollow" />
                    <link rel="icon" type="image/png" href="./favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}