import styled, { css } from 'styled-components'

export interface IChangeVisibility {
  show: boolean
}

export const Header = styled.header<IChangeVisibility>`
  background-color: #db7a00;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s;

  ${props =>
    props.show &&
    css`
      filter: brightness(0.6) saturate(0.4);
    `}

  p {
    font-weight: 400;
  }

  @media (min-width: 850px) {
    flex-direction: row;
    text-align: left;
    padding-left: 2vw;
    padding-right: 2vw;
    justify-content: space-between;
  }
`

export const SocialMediasIcons = styled.article`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 1.6rem;

  svg {
    height: 2rem;
    width: auto;
    margin-right: 1rem;
    cursor: pointer;
  }
`

export const NavbarNav = styled.section<IChangeVisibility>`
  background-color: white;
  border-bottom: solid 3px #ffd500;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  transition: 0.4s;

  ${props =>
    props.show &&
    css`
      filter: brightness(0.6) saturate(0.4);
    `}

  @media (min-width: 700px) {
    padding-left: 2vw;
    padding-right: 2vw;
  }
`

export const NavbarItems = styled.nav`
  display: flex;
  align-items: center;

  a,
  button {
    margin-right: 1.8rem;
    font-weight: 700;
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`

export const SideSection = styled.section<IChangeVisibility>`
  background: white;
  width: ${props => (props.show ? '35.2rem' : '0')};
  height: 100vh;
  transition: 0.4s;
  position: fixed;
  z-index: 3;
  color: black;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  nav {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
    width: 28.6rem;
  }

  ul {
    list-style: none;
    font-size: 1.8rem;
  }

  li {
    height: 5.2rem;
    border-bottom: solid 1px #c9c9c9;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  div {
    margin-right: 2.4rem;
    margin-left: calc(-2.4rem);

    button {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 2.4rem;
      background-color: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 1.2rem;
      margin-top: 2.4rem;
    }
  }

  @media (min-width: 550px) {
    align-items: flex-start;

    nav {
      margin-left: 2vw;
      margin-right: 2vw;
    }

    h1 {
      margin-bottom: 3.2rem;
    }

    div {
      margin-left: 2.4rem;
    }
  }
`
