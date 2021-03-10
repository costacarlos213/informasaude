import React from 'react'
import Link from 'next/link'

import { SponsoredCard } from '../styles/components/sponsoredCard'
import { TypeSpan, Container } from '../styles/global'
import { HeaderSection, SponsoredSection } from '../styles/pages'

interface SponsoredProps {
  sponsoreds: [
    {
      title: string
      slug: string
      content: string
      featuredImage: {
        node: {
          sourceUrl: string
        }
      }
      categories: {
        nodes: [
          {
            name: string
            slug: string
          }
        ]
      }
    }
  ]
}

const Sponsored: React.FC<SponsoredProps> = ({ sponsoreds }) => {
  if (sponsoreds[0] === undefined) {
    return <></>
  }

  return (
    <Container>
      <HeaderSection>
        <h1>Conheça nossos anunciantes</h1>
        <p>Produtos e serviços que te ajudam a manter uma vida mais saudável</p>
      </HeaderSection>
      <SponsoredSection>
        {sponsoreds.map(sponsored => {
          return (
            <SponsoredCard key={sponsored.slug}>
              <Link href={sponsored.slug}>
                <div id="img-container">
                  <img src={sponsored.featuredImage.node.sourceUrl} />
                </div>
              </Link>
              <aside>
                <section>
                  <Link href={sponsored.categories.nodes[0].slug}>
                    <TypeSpan>{sponsored.categories.nodes[0].name}</TypeSpan>
                  </Link>
                  <h1>{sponsored.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: sponsored.content }}
                  />
                </section>
                <footer>
                  <span>
                    <Link href={sponsored.slug}>Ver mais...</Link>
                  </span>
                </footer>
              </aside>
            </SponsoredCard>
          )
        })}
      </SponsoredSection>
    </Container>
  )
}

export default Sponsored
