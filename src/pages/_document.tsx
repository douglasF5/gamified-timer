import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta charSet="utf-8" />
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