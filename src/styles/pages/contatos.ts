import styled from 'styled-components'

export const ContactForm = styled.form`
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  border-radius: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 3.6rem;
  padding-right: 3.6rem;
  margin-top: 3.6rem;
  margin-bottom: 3.6rem;

  header {
    margin-top: 2.4rem;
    text-align: center;

    h1 {
      font-weight: 600;
      font-size: 2rem;
    }

    p {
      color: #a4c40a;
      font-size: 1.4rem;
    }
  }

  section {
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    textarea {
      width: 100%;
      height: 18.4rem;
      margin-top: 2.4rem;
      outline: 0;
      padding: 1rem;
      resize: none;
      border: solid 1px #a9a9a9;
      ::placeholder {
        font-weight: 500;
        font-size: 1.4rem;
      }

      &:hover {
        border: solid 1px #a9a9a9;
      }
    }

    button {
      margin-top: 1.2rem;
      width: 10rem;
      border: 0;
      outline: 0;
      height: 3.6rem;
      background-color: #fc4a00;
      color: white;
      font-weight: 500;
      border-radius: 18px;
      height: 3.6rem;
      cursor: pointer;
    }
  }

  @media (min-width: 700px) {
    width: 62.4rem;
    border-radius: 8px;
  }

  @media (min-height: 920px) {
    margin-top: 6.8vh;
    margin-bottom: 6.8vh;
  }
`

export const InputDiv = styled.div`
  width: 100%;

  & + & {
    margin-top: 2.4rem;

    svg {
      margin-top: 3px;
    }
  }

  svg {
    height: 2rem;
    position: absolute;
    width: auto;
  }
`

export const ContactInput = styled.input`
  border: 0;
  outline: 0;
  border-bottom: solid 1px #a9a9a9;
  width: 100%;
  padding-left: 2.7rem;
  padding-bottom: 5px;

  &::placeholder {
    font-weight: 500;
    font-size: 1.4rem;
  }
`
