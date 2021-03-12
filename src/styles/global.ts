import styled, { createGlobalStyle, css } from 'styled-components'

interface FilterProps {
  isSideSectionVisible: boolean
}

export default createGlobalStyle`
  :root {
    font-size: 60%;
    overflow-x: hidden;
  }

  :root::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }

  :root::-webkit-scrollbar {
    width: 5px;
    background: #F4F4F4;
  }

  :root::-webkit-scrollbar-thumb {
    background: #C0C0C0;
    border-radius: 15px;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
    padding: 0;
    margin: 0;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media (min-width: 1700px) {
    :root {
      font-size: 82.5%;
    }
  }

  @media(min-height: 920px) {
    :root {
      font-size: 72.5%;
    }
  }

  @media (max-width: 400px) {
    :root {
      font-size: 50.8%;
    }
  }

  
`

export const Container = styled.section`
  background-color: white;
  height: auto;
  width: 100vw;
  overflow: auto;

  & + & {
    margin-top: 5px;
  }
`

export const TypeSpan = styled.span`
  font-size: 1.2rem;
  color: #858585;
  font-weight: 400;
`

export const Filter = styled.div<FilterProps>`
  background-color: #f5efe6;
  transition: 0.4s;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  ${props =>
    props.isSideSectionVisible &&
    css`
      filter: brightness(0.6) saturate(0.4);
    `}
`
