/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useEffect } from 'react'
import {
  Header,
  NavbarNav,
  NavbarItems,
  SocialMediasIcons,
  SideSection
} from '../styles/components/navbar'
import InstagramSvg from '../assets/icons/instagramWhite.svg'
import FacebookSvg from '../assets/icons/facebookWhite.svg'
import SearchDiv from './searchDiv'
import Link from 'next/link'

interface NavbarProps {
  changeSideSectionState: React.Dispatch<React.SetStateAction<boolean>>
  visibility: boolean
}

const Navbar: React.FC<NavbarProps> = ({
  changeSideSectionState,
  visibility
}) => {
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

  // useEffect(() => {
  //   const htmlTag = document.getElementsByTagName('html')[0].style
  //   if (htmlTag.overflowY === 'hidden') {
  //     htmlTag.overflowY = 'auto'
  //   } else {
  //     htmlTag.overflowY = 'hidden'
  //   }
  // }, [visibility])

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
              <Link href="/equilibre-se" passHref replace>
                <a>Equilibre-se</a>
              </Link>
            </li>
            <li>
              <Link href="/fitness" passHref replace>
                <a>Fitness</a>
              </Link>
            </li>
            <li>
              <Link href="/familia-plena" passHref replace>
                <a>Família Plena</a>
              </Link>
            </li>
            <li>
              <Link href="/profissional" passHref replace>
                <a>Profissional</a>
              </Link>
            </li>
            <li>
              <Link href="/medicina" passHref replace>
                <a>Medicina</a>
              </Link>
            </li>
            <li>
              <Link href="/alimentacao" passHref replace>
                <a>Alimentação</a>
              </Link>
            </li>
            <li>
              <Link href="/vida-pet" passHref replace>
                <a>Vida Pet</a>
              </Link>
            </li>
            <li>
              <Link href="/saude-financeira" passHref replace>
                <a>Saúde Financeira</a>
              </Link>
            </li>
            <li>
              <Link href="/saude-especial" passHref replace>
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
