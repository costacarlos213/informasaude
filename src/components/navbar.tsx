/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useEffect, useContext } from 'react'
import {
  Header,
  NavbarNav,
  NavbarItems,
  SocialMediasIcons,
  SideSection
} from '../styles/components/navbar'
import InstagramSvg from '../assets/icons/instagramWhite.svg'
import FacebookSvg from '../assets/icons/facebookWhite.svg'
import SearchDiv from './searchBar'
import Link from 'next/link'
import { SidebarContext } from '../lib/context'

const Navbar: React.FC = () => {
  const [visibility, changeSideSectionState] = useContext(SidebarContext)

  function useOutsideClick(ref) {
    useEffect(() => {
      function clickOutsideHandler(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          changeSideSectionState(false)
        }
      }

      document.addEventListener('mousedown', clickOutsideHandler, true)

      return () => {
        document.removeEventListener('mousedown', clickOutsideHandler, true)
      }
    }, [ref])
  }

  const wrapperRef = useRef<HTMLInputElement>(null)
  useOutsideClick(wrapperRef)

  return (
    <section>
      <SideSection show={visibility} ref={wrapperRef}>
        <div>
          <h1>InformaSaúde.com</h1>
          <button onClick={() => changeSideSectionState(false)}>
            <span>×</span>
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/equilibre-se" passHref>
                <a>Equilibre-se</a>
              </Link>
            </li>
            <li>
              <Link href="/fitness" passHref>
                <a>Fitness</a>
              </Link>
            </li>
            <li>
              <Link href="/familia-plena" passHref>
                <a>Família Plena</a>
              </Link>
            </li>
            <li>
              <Link href="/profissional" passHref>
                <a>Profissional</a>
              </Link>
            </li>
            <li>
              <Link href="/medicina" passHref>
                <a>Medicina</a>
              </Link>
            </li>
            <li>
              <Link href="/alimentacao" passHref>
                <a>Alimentação</a>
              </Link>
            </li>
            <li>
              <Link href="/vida-pet" passHref>
                <a>Vida Pet</a>
              </Link>
            </li>
            <li>
              <Link href="/saude-financeira" passHref>
                <a>Saúde Financeira</a>
              </Link>
            </li>
            <li>
              <Link href="/saude-especial" passHref>
                <a>Saúde Especial</a>
              </Link>
            </li>
          </ul>
        </nav>
      </SideSection>
      <Header show={visibility}>
        <div>
          <h1>InformaSaúde.com</h1>
          <p>
            Todas as novidades do mundo da saúde, bem estar e qualidade de vida
            em um só lugar
          </p>
        </div>
        <SocialMediasIcons>
          <a
            href="https://www.facebook.com/InformaSaúde-105372808168269"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FacebookSvg />
          </a>
          <a
            href="https://www.instagram.com/informasaudeoficial/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <InstagramSvg />
          </a>
        </SocialMediasIcons>
      </Header>
      <NavbarNav show={visibility}>
        <NavbarItems>
          <Link href="/" passHref replace>
            <a>Inicio</a>
          </Link>
          <button onClick={() => changeSideSectionState(true)}>Artigos</button>
          <Link href="/contatos" replace passHref>
            <a>Contato</a>
          </Link>
        </NavbarItems>
        <SearchDiv shrink={true} />
      </NavbarNav>
    </section>
  )
}

export default Navbar
