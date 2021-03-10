import React from 'react'

import UserIcon from '../assets/icons/user.svg'
import EmailIcon from '../assets/icons/email.svg'

import { ContactForm, ContactInput, InputDiv } from '../styles/pages/contatos'

import Main from '../components/main'

const Contatos: React.FC = () => {
  return (
    <Main>
      <ContactForm>
        <header>
          <h1>Entre em contato conosco!</h1>
        </header>
        <section>
          <InputDiv>
            <UserIcon />
            <ContactInput required placeholder="Nome" />
          </InputDiv>
          <InputDiv>
            <EmailIcon />
            <ContactInput required placeholder="Email" type="email" />
          </InputDiv>
          <textarea required placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </section>
      </ContactForm>
    </Main>
  )
}

export default Contatos
