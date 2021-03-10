import React, { useState } from 'react'

export const SidebarContext = React.createContext([])
export const PaginationContext = React.createContext([])
export let previewPagination = 0

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

  const setPagination = index => {
    previewPagination = paginationContext
    setPaginationContext(index)
  }

  return (
    <PaginationContext.Provider value={[paginationContext, setPagination]}>
      {children}
    </PaginationContext.Provider>
  )
}

export { SidebarProvider, PaginationProvider }
