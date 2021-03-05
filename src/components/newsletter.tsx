import React from 'react'

import informaSaudeImg from '../assets/informaSaude.png'
import UserIcon from '../assets/icons/userFilled.svg'
import EmailIcon from '../assets/icons/emailFilled.svg'

import {
  NewsletterAside,
  ContentDiv,
  NewsletterForm
} from '../styles/components/newsletter'

const Newsletter: React.FC = () => {
  return (
    <NewsletterAside>
      <header>
        <h1>Está Gostando?</h1>
        <p>Inscreva-se em nossa newsletter e receba todas as novidades!</p>
      </header>
      <ContentDiv>
        <NewsletterForm>
          <div>
            <UserIcon />
            <input type="text" required placeholder="Nome" />
          </div>
          <div>
            <EmailIcon />
            <input type="email" required placeholder="Email" />
          </div>
          <button>Enviar</button>
        </NewsletterForm>
        <div id="img-div">
          <img src={informaSaudeImg} alt="InformaSaúde.com" />
        </div>
      </ContentDiv>
    </NewsletterAside>
  )
}

export default Newsletter
