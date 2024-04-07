'use client'

import { Logo } from './icons/logo'
import { HamburgerIcon } from './icons/HamburgerIcon'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Button } from '@/components/button'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

export const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) html.classList.toggle('overflow-hidden', isHamburgerMenuOpen)
  }, [isHamburgerMenuOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsHamburgerMenuOpen(false)

    window.addEventListener('orientationchange', closeHamburgerNavigation)
    window.addEventListener('resize', closeHamburgerNavigation)

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation)
      window.removeEventListener('resize', closeHamburgerNavigation)
    }
  }, [setIsHamburgerMenuOpen])

  const headerLinks = [
    { href: '/features', text: 'Features' },
    { href: '/method', text: 'Method' },
    { href: '/customers', text: 'Customers' },
    { href: '/changelog', text: 'Changelog' },
    { href: '/pricing', text: 'Pricing' },
    { href: '/company', text: 'Company' },
    { href: '/contact', text: 'Contact' }
  ]

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link prefetch={false} className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
        </Link>
        <div
          className={classNames(
            'transition-[visibility] md:visible',
            isHamburgerMenuOpen ? 'visible' : 'delay-500 invisible'
          )}
        >
          <nav
            className={classNames(
              'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
              isHamburgerMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={classNames(
                'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-16 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
                'ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors',
                isHamburgerMenuOpen && '[&_a]:translate-y-0'
              )}
            >
              {headerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    prefetch={false}
                    href={link.href}
                    className="hover:text-gray"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="ml-auto h-full flex items-center">
          <Link
            prefetch={false}
            href="/login"
            className="text-sm mr-6 hover:text-gray"
          >
            Log in
          </Link>
          <Button href="/signup">Sign up</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setIsHamburgerMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </Container>
    </header>
  )
}
