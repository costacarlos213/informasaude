import styled from 'styled-components'
import { IChangeVisibility } from './navbar'

export const DivSearch = styled.article<IChangeVisibility>`
  display: flex;
  margin-left: auto;

  button {
    width: 3.2rem;
    height: 3.8rem;
    border-radius: 6px;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.show ? '#dce7e8' : 'transparent')};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    cursor: pointer;

    @media (min-width: 700px) {
      background-color: #dce7e8;
    }
  }
`

export const InputSearch = styled.input<IChangeVisibility>`
  border-radius: 6px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border: 0;
  outline: 0;
  background-color: #dce7e8;
  height: 3.8rem;
  margin-left: auto;
  padding-right: ${props => (props.show ? '3px' : '0')};
  padding-left: ${props => (props.show ? '1.6rem' : '0')};
  width: ${props => (props.show ? '100%' : '0%')};
  color: #3a3d3d;
  transition: 0.4s;

  &::placeholder {
    color: #878e8f;
    font-weight: 400;
    font-size: 1.4rem;
  }

  @media (min-width: 700px) {
    padding-left: 1.6rem;
    padding-right: 3px;
    width: 100%;
  }
`
