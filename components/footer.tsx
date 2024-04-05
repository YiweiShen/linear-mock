import { Logo } from './icons/logo'
import { Container } from './container'

const FooterLinkList = ({
  title,
  links
}: {
  title: string
  links: { href: string; text: string }[]
}) => (
  <div>
    <h3 className="mb-4 text-sm">{title}</h3>
    <ul className="text-sm text-gray space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { href: '/features', text: 'Features' },
        { href: '/integrations', text: 'Integrations' },
        { href: '/pricing', text: 'Pricing' },
        { href: '/changelog', text: 'Changelog' },
        { href: '/docs', text: 'Docs' },
        { href: '/method', text: 'Linear Method' },
        { href: '/download', text: 'Download' }
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about', text: 'About us' },
        { href: '/blog', text: 'Blog' },
        { href: '/careers', text: 'Careers' },
        { href: '/customers', text: 'Customers' },
        { href: '/brand', text: 'Brand' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/startup-program', text: 'Startup Program' },
        { href: '/community', text: 'Community' },
        { href: '/contact', text: 'Contact' },
        { href: '/dpa', text: 'DPA' },
        { href: '/privacy', text: 'Privacy Policy' },
        { href: '/terms', text: 'Terms of service' },
        { href: '/vulnerability', text: 'Report a vulnerability' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { href: '/api', text: 'API' },
        { href: '/status', text: 'Status' },
        { href: 'https://github.com', text: 'GitHub' },
        { href: '/readme', text: 'README' }
      ]
    }
  ]

  return (
    <footer className="bottom-0 left-0 z-10 w-full border-t mt-16 mb-auto border-transparent-white backdrop-blur-[12px]">
      <Container className="flex mt-16 mb-16">
        <div className="max-w-[120rem] mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="text-md text-gray md:col-span-2 flex">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
            <span>Linear - Designed Worldwide</span>
          </div>
          {footerLinks.map((footerLink) => (
            <FooterLinkList
              key={footerLink.title}
              title={footerLink.title}
              links={footerLink.links}
            />
          ))}
        </div>
      </Container>
    </footer>
  )
}
