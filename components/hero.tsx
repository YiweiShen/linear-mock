import classNames from 'classnames'

interface HeroProps {
  className?: string
  children?: React.ReactNode
}

interface HeroElementProps {
  className?: string
  children: React.ReactNode
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        className,
        'mt-4 mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]'
      )}
    >
      {children}
    </h1>
  )
}

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        className,
        'mb-12 text-lg text-primary-text translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]'
      )}
    >
      {children}
    </p>
  )
}

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center m-12">{children}</div>
}
