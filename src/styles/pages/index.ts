import styled from 'styled-components'

export const HeaderSection = styled.header`
  margin: 2rem;
  text-align: center;

  h1 {
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
  }

  @media (min-width: 700px) {
    margin: 2vw;
    text-align: left;
  }
`

export const SponsoredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`
