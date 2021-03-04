import React, { useState } from 'react'

import LoupeSvg from '../assets/icons/loupe.svg'
import { DivSearch, InputSearch } from '../styles/components/divSearch'

interface ShowProps {
  shrink: boolean
}

const SearchDiv: React.FC<ShowProps> = ({ shrink }) => {
  const [searchBarStatus, setSearchBarStatus] = useState(false)

  const changeSearchBarState = () => {
    searchBarStatus ? setSearchBarStatus(false) : setSearchBarStatus(true)
  }

  return (
    <DivSearch show={shrink ? searchBarStatus : true}>
      <InputSearch
        placeholder="Procurar Artigos"
        show={shrink ? searchBarStatus : true}
      />
      <button onClick={changeSearchBarState}>
        <LoupeSvg height="2rem" />
      </button>
    </DivSearch>
  )
}

export default SearchDiv
