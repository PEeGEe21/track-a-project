import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
        <link href="/font/stylesheet.css"  rel="stylesheet" />
    </Head>
      <Component {...pageProps} />
    
    </>
  )
}

export default MyApp