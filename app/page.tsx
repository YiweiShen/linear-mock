import { Container } from '@/components/container'
import { Hero, HeroTitle, HeroSubtitle } from '@/components/hero'
import Image from 'next/image'
import heroImage from '@/public/img/hero.jpeg'
import { Button } from '@/components/button'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]"
          href="/"
          variant="secondary"
          size="medium"
        >
          <span>Linear Mobile v0.1 {'>'} </span>
        </Button>
        <HeroTitle>
          Linear is a better way
          <br /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br /> Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>

        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          href="/"
          variant="primary"
          size="large"
        >
          <span>Get Started {'>'}</span>
        </Button>
        <Image
          className="rounded-lg mx-auto m-16"
          src={heroImage}
          alt="Hero image"
          width={1024}
          height={720}
        />
        <HeroSubtitle>
          Powering the world’s best product teams.
          <br />{' '}
          <span style={{ color: 'white' }}>
            From next-gen startups to established enterprises.
          </span>
        </HeroSubtitle>
      </Hero>
    </Container>
  )
}
