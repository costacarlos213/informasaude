import styled from 'styled-components'
import { TypeSpan } from '../global'

export const SponsoredCard = styled.article`
  width: calc(100vw - 4rem);
  height: auto;
  margin-bottom: 1.6rem;
  max-width: 38.2rem;

  div#img-container {
    width: 100%;
    height: 20.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }

  ${TypeSpan} {
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  section {
    h1:hover {
      cursor: pointer;
      text-decoration: underline;
    }
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

    div#img-container {
      width: 30rem;
      height: 20rem;
      cursor: pointer;

      img {
        height: 20rem;
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 15rem;

      footer {
        margin: 0;
      }
    }
  }
`
