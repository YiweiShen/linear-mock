import Link from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode
  href: string
  className?: string
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary:
        'bg-primary hover:text-shadow hover:shadow-primary hover:bg-primary-light',
      secondary:
        'text-off-white bg-white bg-opacity-10 border border-white-a08 backdrop-blur-[12px] hover:bg-opacity-20 transition-colors ease-in'
    },
    size: {
      small: 'text-xs px-3 h-6',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})

export const Button = ({
  children,
  href,
  variant,
  size,
  className
}: ButtonProps) => {
  return (
    <Link
      className={classNames(buttonClasses({ variant, size }), className)}
      href={href}
    >
      {children}
    </Link>
  )
}
