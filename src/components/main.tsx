import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { SidebarProvider } from '../lib/context'
import Filter from './filter'

const Main: React.FC = ({ children }) => {
  return (
    <SidebarProvider>
      <Navbar />
      <Filter>
        <main>{children}</main>
        <Footer />
      </Filter>
    </SidebarProvider>
  )
}

export default Main
