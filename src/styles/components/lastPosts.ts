import styled from 'styled-components'
import { TypeSpan } from '../global'

interface PostDivProps {
  unique: boolean
}

export const PostsDiv = styled.div<PostDivProps>`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  margin-bottom: 2.4rem;

  @media (min-width: 880px) {
    flex-direction: row;
    height: 30rem;
    justify-content: ${props => (props.unique ? 'flex-start' : 'space-evenly')};
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`

export const PostCard = styled.article<PostDivProps>`
  width: 80vw;
  min-width: 2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  height: inherit;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 1.6rem;
  cursor: pointer;

  img {
    height: 75%;
    object-fit: cover;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 25%;
    display: flex;
    flex-direction: column;
    padding-left: 1.6rem;
    justify-content: center;
    padding-right: 1.6rem;
    padding-top: 2px;

    p {
      font-weight: 600;
      line-height: 2rem;
    }

    ${TypeSpan} {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 880px) {
    width: ${props => (props.unique ? '31.2%' : 'calc(100% / 2)')};
  }
`
