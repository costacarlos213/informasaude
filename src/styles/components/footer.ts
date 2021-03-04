import styled from 'styled-components'
import { IChangeVisibility } from './navbar'

export const FooterDiv = styled.footer<IChangeVisibility>`
  filter: ${props => (props.show ? 'saturate(0.4) brightness(0.8)' : 'none')};
  background-color: #003678;
  display: flex;
  justify-content: space-around;
  color: whitesmoke;
  padding-bottom: 1.6rem;
  margin-top: 5px;

  width: 100%;

  h1 {
    font-size: 1.4rem;
    margin-top: 2.4rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
  }

  p,
  li {
    font-size: 1.2rem;
    font-weight: 400;
  }

  li {
    list-style: none;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`
export const BlogSection = styled.section`
  aside {
    display: flex;
    flex-direction: row;
    text-align: center;

    div + div {
      margin-left: 1.6rem;
    }

    @media (min-width: 700px) {
      text-align: left;
    }
  }
`
export const WhoWeAreSection = styled.section`
  p {
    max-width: 250px;
    max-height: 250px;
    text-align: justify;
  }
`
