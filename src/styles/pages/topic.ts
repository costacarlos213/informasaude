import styled, { css } from 'styled-components'
import { TypeSpan, Container } from '../global'

interface ButtonProps {
  active: boolean
}

export const PostArticle = styled.article`
  margin-top: 2.4rem;
  border-bottom: solid 1px #c3c3c3;
  display: flex;

  &:nth-last-child(-n + 1) {
    border: 0;
  }

  div {
    margin-top: 2.4rem;
    max-width: 215px;
    margin-right: 1.6rem;
    cursor: pointer;

    ${TypeSpan} {
      font-weight: 400;
      font-size: 1.4rem;
    }

    h1 {
      font-weight: 600;
      line-height: 2.4rem;
      font-size: 1.8rem;
    }

    @media (min-width: 700px) {
      max-width: 400px;
    }
  }

  img {
    border-radius: 12px;
    width: 45vw;
    height: 14.2rem;
    object-fit: cover;
    margin-right: 1.6rem;
    margin-bottom: 2.4rem;
    cursor: pointer;

    @media (min-width: 500px) {
      width: 24.8rem;
      height: 18.4rem;
    }
  }

  @media (min-width: 700px) {
    width: 55vw;
    margin-left: 2.4rem;
  }
`

export const CircleButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin-bottom: 2.4rem;
  margin-top: 1.6rem;

  @media (min-width: 700px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const PaginationButtons = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: solid 3px #c3c3c3;
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #949494;
  margin-right: 5px;
  font-weight: 700;

  &:active {
    transform: scale(0.8);
  }

  ${props =>
    props.active &&
    css`
      background-color: #ff7900;
      color: white;
      border-color: #ff7900;
      width: 2.8rem;
      height: 2.8rem;
      font-size: 1.8rem;
    `}
`

export const PostsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.8rem;
  padding-right: 1.8rem;

  @media (min-width: 700px) {
    align-items: flex-start;
    padding: 0;
  }
`
