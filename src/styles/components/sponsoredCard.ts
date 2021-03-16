import styled, { css } from 'styled-components'
import { TypeSpan } from '../global'

interface SectionProps {
  unique: boolean
}

export const SponsoredCard = styled.article`
  width: calc(100vw - 4rem);
  height: auto;
  margin-bottom: 1.6rem;
  max-width: 38.2rem;

  div#img-container {
    width: 100%;
    height: 28rem;

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
    a {
      cursor: pointer;
    }

    a:hover h1 {
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

  @media (min-width: 750px) {
    width: 30rem;
    flex: 0 0 30rem;

    & + & {
      margin-left: 1.6rem;
    }

    div#img-container {
      width: 30rem;
      height: 21.4rem;
      cursor: pointer;
    }

    aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 12.4rem;

      footer {
        margin: 0;
      }
    }
  }
`

export const SponsoredSection = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 750px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    flex-direction: row;
    justify-content: ${props => (props.unique ? 'flex-start' : 'space-evenly')};
    ${props =>
      props.unique &&
      css`
        padding-left: 2.4rem;
      `}
  }
`
