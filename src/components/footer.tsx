import React from 'react'

import {
  FooterDiv,
  BlogSection,
  WhoWeAreSection
} from '../styles/components/footer'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <FooterDiv show={false}>
      <BlogSection>
        <h1>Blog</h1>
        <aside>
          <div>
            <ul>
              <li>
                <Link href="/" replace passHref>
                  <a>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/fitness" replace passHref>
                  <a>Fitness</a>
                </Link>
              </li>
              <li>
                <Link href="/equilibre-se" replace passHref>
                  <a>Equilibre-se</a>
                </Link>
              </li>
              <li>
                <Link href="/familia-plena" replace passHref>
                  <a>Família Plena</a>
                </Link>
              </li>
              <li>
                <Link href="/profissional" replace passHref>
                  <a>Profissional</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/medicina" replace passHref>
                  <a>Medicina</a>
                </Link>
              </li>
              <li>
                <Link href="/alimentacao" replace passHref>
                  <a>Alimentação</a>
                </Link>
              </li>
              <li>
                <Link href="/vida-pet" replace passHref>
                  <a>Vida Pet</a>
                </Link>
              </li>
              <li>
                <Link href="/saude-financeira" replace passHref>
                  <a>Saúde Financeira</a>
                </Link>
              </li>
              <li>
                <Link href="/saude-especial" replace passHref>
                  <a>Saúde Especial</a>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </BlogSection>
      <section>
        <h1>Contato</h1>
        <p>contato@informasaude.com</p>
        <p>11 99242-2100</p>
      </section>
      <WhoWeAreSection>
        <h1>Quem Somos?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          dui et elit aliquet commodo. Aliquam porta libero sit amet erat
          condimentum, tempus rutrum leo mattis. Phasellus pellentesque dolor
          ex, ut vestibulum neque rhoncus eget. Class aptent taciti sociosqu
        </p>
      </WhoWeAreSection>
    </FooterDiv>
  )
}

export default Footer
