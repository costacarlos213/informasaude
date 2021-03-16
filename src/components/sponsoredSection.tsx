import React from 'react'
import Link from 'next/link'

import {
  SponsoredCard,
  SponsoredSection
} from '../styles/components/sponsoredCard'
import { TypeSpan, Container } from '../styles/global'
import { HeaderSection } from '../styles/pages'

interface SponsoredProps {
  sponsoreds: [
    {
      title: string
      slug: string
      content: string
      excerpt: string
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

const SponsoredComponent: React.FC<SponsoredProps> = ({ sponsoreds }) => {
  let unique = false

  if (sponsoreds[0] === undefined) {
    return <></>
  }

  if (sponsoreds.length === 1) {
    unique = true
  }

  return (
    <Container>
      <HeaderSection>
        <h1>Conheça nossos anunciantes</h1>
        <p>Produtos e serviços que te ajudam a manter uma vida mais saudável</p>
      </HeaderSection>
      <SponsoredSection unique={unique}>
        {sponsoreds.map(sponsored => {
          return (
            <SponsoredCard key={sponsored.slug}>
              <Link href={`/anunciante/${sponsored.slug}`}>
                <div id="img-container">
                  <img src={sponsored.featuredImage.node.sourceUrl} />
                </div>
              </Link>
              <aside>
                <section>
                  <Link href={sponsored.categories.nodes[0].slug}>
                    <TypeSpan>{sponsored.categories.nodes[0].name}</TypeSpan>
                  </Link>
                  <Link href={`/anunciante/${sponsored.slug}`}>
                    <a>
                      <h1>{sponsored.title}</h1>
                    </a>
                  </Link>
                </section>
                <footer>
                  <span>
                    <Link href={`/anunciante/${sponsored.slug}`}>
                      Ver mais...
                    </Link>
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

export default SponsoredComponent
