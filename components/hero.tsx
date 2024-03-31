interface HeroProps {
  children?: React.ReactNode
}

interface HeroElementProps {
  children: React.ReactNode
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className="text-5xl my-6 text-gradient">{children}</h1>
}

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className="mb-12 text-lg text-primary-text">{children}</p>
}

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>
}
