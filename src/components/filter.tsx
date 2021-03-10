import React, { useContext } from 'react'
import { Filter as FilterDiv } from '../styles/global'
import { SidebarContext } from '../lib/context'

const Filter: React.FC = ({ children }) => {
  const [sidebarContext] = useContext(SidebarContext)

  return <FilterDiv isSideSectionVisible={sidebarContext}>{children}</FilterDiv>
}

export default Filter
