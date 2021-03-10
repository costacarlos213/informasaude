import React, { useContext } from 'react'

import informaSaudeImg from '../assets/informaSaude.png'

import SearchDiv from './searchBar'
import { SearchArticlesAside } from '../styles/components/searchPosts'
import { SidebarContext } from '../lib/context'

const SearchPosts: React.FC = () => {
  const [sidebarContext, setSidebarContext] = useContext(SidebarContext)  // eslint-disable-line

  return (
    <SearchArticlesAside>
      <img src={informaSaudeImg} alt="InformaSaúde.com" />
      <header>
        <h1>Todas as novidades em um só lugar</h1>
        <p>
          Pesquise por um artigo ou explore os diversos conteúdos de nossa
          plataforma!
        </p>
      </header>
      <SearchDiv shrink={false} />
      <p onClick={() => setSidebarContext(true)}>Clique aqui para explorar</p>
    </SearchArticlesAside>
  )
}

export default SearchPosts
