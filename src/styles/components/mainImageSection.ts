import styled from 'styled-components'

export const ImgCard = styled.article`
  width: 90vw;
  height: calc(32rem + 20px);
  margin: 20px;
  border: solid 5px white;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`
export const Description = styled.aside`
  position: relative;
  background-color: white;
  padding: 10px;
  padding-left: 15px;
  padding-right: 20px;
  bottom: 5.8rem;
  max-width: 40rem;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-weight: 400;
    line-height: 1.6rem;
  }
`

export const MainCardImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export const MainImagesContainer = styled.div`
  cursor: pointer;

  div {
    ${ImgCard} {
      height: 25vh;
    }
  }

  @media (min-width: 700px) {
    display: flex;

    div {
      ${ImgCard} {
        width: 46.5vw;
        height: 16rem;
      }
    }
  }
`
