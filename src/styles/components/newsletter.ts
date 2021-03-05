import styled from 'styled-components'

export const NewsletterAside = styled.aside`
  background-color: white;
  border-radius: 12px;
  width: calc(100vw - 4rem);
  height: auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  padding: 3.6rem;
  padding-top: 4.6rem;
  padding-bottom: 4.6rem;

  header {
    text-align: justify;

    h1 {
      font-weight: 600;
    }

    p {
      font-style: italic;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 700px) {
    width: 60.8rem;
  }
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.6rem;
  justify-content: space-between;

  div,
  form {
    width: 50%;
  }

  #img-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    width: 100%;
  }
`

export const NewsletterForm = styled.form`
  border-right: solid 2px #d0d0d0;
  height: 16.2rem;
  margin-right: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    background-color: #fc4a00;
    outline: 0;
    border: 0;
    width: 50%;
    height: 3.6rem;
    border-radius: 2rem;
    color: white;
    font-weight: 500;
    cursor: pointer;
    margin-top: 1rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;

    input {
      width: 100%;
      border-radius: 12px;
      height: 3.6rem;
      border: 0;
      background-color: #edebeb;
      outline: 0;
      padding-left: 4.2rem;
      padding-right: 1.6rem;

      &::placeholder {
        font-weight: 400;
        color: black;
      }
    }

    svg {
      height: 1.6rem;
      position: absolute;
      width: auto;
      margin-left: 1.6rem;
    }
  }
`
