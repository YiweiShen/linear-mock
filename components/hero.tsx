interface HeroProps {
  children?: React.ReactNode
}

interface HeroElementProps {
  children: React.ReactNode
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className="text-5xl mt-4 mb-12 text-gradient translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]">
      {children}
    </h1>
  )
}

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return (
    <p className="mb-12 text-lg text-primary-text translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
      {children}
    </p>
  )
}

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center m-12">{children}</div>
}
