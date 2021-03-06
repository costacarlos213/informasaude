import React, { useState } from 'react'

import LoupeSvg from '../assets/icons/loupe.svg'
import { DivSearch, InputSearch } from '../styles/components/divSearch'

interface ShowProps {
  shrink: boolean
}

const SearchDiv: React.FC<ShowProps> = ({ shrink }) => {
  const [searchBarStatus, setSearchBarStatus] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const changeSearchBarState = () => {
    searchBarStatus ? setSearchBarStatus(false) : setSearchBarStatus(true)
  }

  const FormHandler = event => {
    event.preventDefault()

    if (inputValue === '') {
      changeSearchBarState()
    } else {
      window.location.href = `/search/${inputValue}`
    }
  }

  return (
    <DivSearch show={shrink ? searchBarStatus : true}>
      <form onSubmit={FormHandler}>
        <InputSearch
          placeholder="Procurar Artigos"
          show={shrink ? searchBarStatus : true}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={FormHandler}>
          <LoupeSvg height="2rem" />
        </button>
      </form>
    </DivSearch>
  )
}

export default SearchDiv
