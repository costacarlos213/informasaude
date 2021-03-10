import React, { FormEvent, useState } from 'react'

import UserIcon from '../assets/icons/user.svg'
import EmailIcon from '../assets/icons/email.svg'

import { ContactForm, ContactInput, InputDiv } from '../styles/pages/contatos'

import Main from '../components/main'

const Contatos: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showText, setShowtext] = useState(false)

  function handleContactForm(e: FormEvent) {
    e.preventDefault()
    const body = JSON.stringify({
      name,
      email,
      message
    })

    fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    }).then(() => {
      setShowtext(true)
    })
  }

  return (
    <Main>
      <ContactForm onSubmit={handleContactForm}>
        <header>
          <h1>Entre em contato conosco!</h1>
          {showText && <p>Mensagem enviada com sucesso</p>}
        </header>
        <section>
          <InputDiv>
            <UserIcon />
            <ContactInput
              required
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <EmailIcon />
            <ContactInput
              required
              placeholder="Email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </InputDiv>
          <textarea
            required
            placeholder="Mensagem"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </section>
      </ContactForm>
    </Main>
  )
}

export default Contatos
