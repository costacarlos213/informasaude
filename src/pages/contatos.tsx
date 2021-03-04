import React, { useState } from 'react'

import { ContactForm, ContactInput, InputDiv } from '../styles/pages/contatos'

import UserIcon from '../assets/icons/user.svg'
import EmailIcon from '../assets/icons/email.svg'

import Navbar from '../components/navbar'
import { Filter } from '../styles/global'
import Footer from '../components/footer'

const Contatos: React.FC = () => {
  const [sideSectionIsVisible, setSideSectionVisibility] = useState(false)

  return (
    <>
      <Navbar
        changeSideSectionState={setSideSectionVisibility}
        visibility={sideSectionIsVisible}
      />
      <Filter isSideSectionVisible={sideSectionIsVisible}>
        <main>
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
        </main>
        <Footer />
      </Filter>
    </>
  )
}

export default Contatos
