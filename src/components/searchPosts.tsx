import React from 'react'

import informaSaudeImg from '../assets/informaSaude.png'

import SearchDiv from './searchBar'
import { SearchArticlesAside } from '../styles/components/searchPosts'

interface SearchPostsProps {
  changeSideSectionState(): void
}

const SearchPosts: React.FC<SearchPostsProps> = ({
  changeSideSectionState
}) => {
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
      <p onClick={changeSideSectionState}>Clique aqui para explorar</p>
    </SearchArticlesAside>
  )
}

export default SearchPosts
