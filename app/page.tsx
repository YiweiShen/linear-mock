import { Container } from '@/components/container'
import { Hero, HeroTitle, HeroSubtitle } from '@/components/hero'
import Image from 'next/image'
import heroImage from '@/public/img/hero.jpeg'

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way
          <br /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br /> Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Image
          className="rounded-lg mx-auto"
          src={heroImage}
          alt="Hero image"
          width={1024}
          height={720}
        />
      </Hero>
    </Container>
  )
}
