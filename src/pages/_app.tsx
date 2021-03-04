import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../styles/global'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>InformaSaúde.com</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
