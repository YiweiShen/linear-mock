import { Container } from '@/components/container'
import { Hero, HeroTitle, HeroSubtitle } from '@/components/hero'
import Image from 'next/image'
import heroImage from '@/public/img/hero.jpeg'
import { VercelLogo } from '@/components/icons/VercelLogo'
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
        <HeroTitle className="text-5xl text-gradient">
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
        />
        <HeroSubtitle className="pt-36">
          Powering the world’s best product teams.
          <br />
          <span style={{ color: 'white' }}>
            From next-gen startups to established enterprises.
          </span>
        </HeroSubtitle>
        <div className="flex flex-wrap justify-center">
          {[...Array(12)].map((_, i) => (
            <VercelLogo key={i} className="w-36 mr-6 mt-4" />
          ))}
        </div>
        <HeroTitle className="text-4xl mt-72 mb-5">
          Unlike any tool
          <br />
          you’ve used before
        </HeroTitle>
        <HeroSubtitle>
          Designed to the last pixel and engineered
          <br />
          with unforgiving precision, Linear combines
          <br />
          UI elegance with world-class performance.
        </HeroSubtitle>
      </Hero>
    </Container>
  )
}
