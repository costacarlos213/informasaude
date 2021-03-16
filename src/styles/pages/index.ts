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

  @media (min-width: 750px) {
    margin: 2vw;
    text-align: left;
  }
`

export const LastPostHeader = styled(HeaderSection)`
  margin-bottom: 1rem;

  @media (min-width: 700px) {
    display: flex;
    align-items: flex-end;

    h1 {
      line-height: 2.8rem;
      margin-right: 1rem;
    }

    margin-bottom: 2.8rem;
  }
`
