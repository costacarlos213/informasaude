import React, { useState } from 'react'

export const SidebarContext = React.createContext([])
export const PaginationContext = React.createContext([])

const SidebarProvider: React.FC = ({ children }) => {
  const [sidebarContext, setSidebarContext] = useState(false)

  return (
    <SidebarContext.Provider value={[sidebarContext, setSidebarContext]}>
      {children}
    </SidebarContext.Provider>
  )
}

const PaginationProvider: React.FC = ({ children }) => {
  const [paginationContext, setPaginationContext] = useState(1)

  return (
    <PaginationContext.Provider
      value={[paginationContext, setPaginationContext]}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export { SidebarProvider, PaginationProvider }
