import React from 'react'
import Head from 'next/head'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../styles/global'
import { PaginationProvider } from '../lib/context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>InformaSaúde.com</title>
      </Head>
      <PaginationProvider>
        <Component {...pageProps} />
      </PaginationProvider>
      <GlobalStyle />
    </>
  )
}

export default MyApp
