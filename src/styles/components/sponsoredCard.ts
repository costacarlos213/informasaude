import styled from 'styled-components'
import { TypeSpan } from '../global'

export const SponsoredCard = styled.article`
  width: calc(100vw - 4rem);
  height: auto;
  margin-bottom: 1.6rem;
  max-width: 38.2rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
  }

  ${TypeSpan} {
    font-size: 1.4rem;
  }

  aside {
    margin: 1rem;

    h1 {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 2.8rem;
    }

    p {
      font-weight: 400;
    }

    footer {
      text-decoration: underline;
      margin-top: 2.4rem;
    }
  }

  @media (min-width: 700px) {
    width: 30rem;
    flex: 0 0 30rem;

    & + & {
      margin-left: 1.6rem;
    }

    aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 15rem;

      footer {
        margin: 0;
      }

      img {
        height: 20rem;
      }
    }
  }
`
