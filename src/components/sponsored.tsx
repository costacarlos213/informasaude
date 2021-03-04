import React from 'react'
import Link from 'next/link'

import marketImg from '../assets/mercado.jpg'
import { SponsoredCard } from '../styles/components/sponsoredCard'
import { TypeSpan } from '../styles/global'
import { HeaderSection, SponsoredSection } from '../styles/pages'

// interface ISponsored {
//   type: string
//   title: string
//   address: string
//   image?: string
// }

const Sponsored: React.FC = () => {
  return (
    <>
      <HeaderSection>
        <h1>Conheça nossos anunciantes</h1>
        <p>Produtos e serviços que te ajudam a manter uma vida mais saudável</p>
      </HeaderSection>
      <SponsoredSection>
        <SponsoredCard>
          <img src={marketImg} />
          <aside>
            <section>
              <TypeSpan>Alimentação</TypeSpan>
              <h1>Mercado Orgânicos</h1>
              <p>Rua Javoraú, 2021 - Freguesia do Ó</p>
            </section>
            <footer>
              <span>
                <Link href="#">Ver mais...</Link>
              </span>
            </footer>
          </aside>
        </SponsoredCard>
        <SponsoredCard>
          <img src={marketImg} />
          <aside>
            <section>
              <TypeSpan>Alimentação</TypeSpan>
              <h1>Mercado Orgânicos</h1>
              <p>Rua Javoraú, 2021 - Freguesia do Ó</p>
            </section>
            <footer>
              <span>
                <Link href="#">Ver mais...</Link>
              </span>
            </footer>
          </aside>
        </SponsoredCard>
        <SponsoredCard>
          <img src={marketImg} />
          <aside>
            <section>
              <TypeSpan>Alimentação</TypeSpan>
              <h1>Mercado Orgânicos</h1>
              <p>Rua Javoraú, 2021 - Freguesia do Ó</p>
            </section>
            <footer>
              <span>
                <Link href="#">Ver mais...</Link>
              </span>
            </footer>
          </aside>
        </SponsoredCard>
        <SponsoredCard>
          <img src={marketImg} />
          <aside>
            <section>
              <TypeSpan>Alimentação</TypeSpan>
              <h1>Mercado Orgânicos</h1>
              <p>Rua Javoraú, 2021 - Freguesia do Ó</p>
            </section>
            <footer>
              <span>
                <Link href="#">Ver mais...</Link>
              </span>
            </footer>
          </aside>
        </SponsoredCard>
      </SponsoredSection>
    </>
  )
}

export default Sponsored
