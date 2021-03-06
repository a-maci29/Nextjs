import Link from 'next/Link'
import Head from 'next/head';
import Script from 'next/script'
import Layout from '../../components/layout';


export default function FirstPost() {
    return (
    <>
    <Layout>
    <Head>
      <title>Uno</title>
    </Head>

    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

    <h1>¯\_(ツ)_/¯</h1>
    <h2><Link href="/">Back to home</Link></h2>
    <h2><Link href="first-post/">click here</Link></h2>

    </Layout>
    </>
    )
  }