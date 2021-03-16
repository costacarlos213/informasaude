import styled from 'styled-components'
import { TypeSpan } from '../global'

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.4rem;

  ${TypeSpan} {
    font-size: 2rem;
    font-weight: 500;
  }

  h1 {
    font-size: 3.2rem;
    margin-bottom: 8px;
    text-align: center;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.4rem;
    }

    ${TypeSpan} {
      font-size: 1.6rem;
      font-weight: 500;
    }

    p {
      font-size: 1.4rem;
    }
  }
`
export const PostSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3.2rem;
  margin-bottom: 3.6rem;
  overflow-x: hidden;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      height: auto;
      margin-bottom: 0;
    }

    p {
      width: 100%;
      max-width: 80rem;
      text-align: justify;
      margin-top: 1.6rem;
      text-indent: 3.6rem;
    }

    figure {
      width: auto;
      max-width: 60rem;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;

      &.is-type-video {
        width: 53.2rem;
        height: 30rem;
      }

      * {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 900px) {
    div {
      width: 100vw;
      height: 34.2rem;
      margin-bottom: 2.4rem;
    }

    section {
      p {
        max-width: 80vw;
      }
    }
  }
`

export const ImageDiv = styled.div`
  width: 92.8rem;
  /* height: 42.5rem; */
  height: auto;
  margin-bottom: 2.4rem;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
