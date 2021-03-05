import styled from 'styled-components'
import { DivSearch, InputSearch } from '../components/divSearch'

export const SearchArticlesAside = styled.aside`
  background-color: white;
  border-radius: 12px;
  width: calc(100vw - 4rem);
  height: auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  padding: 3.6rem;
  padding-top: 4.6rem;
  padding-bottom: 4.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 10.4rem;
  }

  ${DivSearch} {
    margin-top: 3.2rem;
    margin-left: 0;
    margin-right: 0;
    width: 100%;

    ${InputSearch} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-color: #edebeb;
    }

    button {
      background-color: #edebeb;
    }
  }

  header {
    text-align: justify;
    margin-top: 2.4rem;

    h1 {
      font-weight: 600;
    }

    p {
      font-style: italic;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  & > p {
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 1.8rem;
    font-style: italic;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    width: 51.4rem;
  }
`
