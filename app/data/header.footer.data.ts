import { facebookIcon } from '../lib/icons'
import { NavigationLinkProps, SocialMediaProps } from '../types/header.footer.types'

const socialMedia: SocialMediaProps[] = [
  {
    linkKey: 'https://www.facebook.com/pam.driscoll.71',
    icon: facebookIcon
  }
]

const navigationLinks = (path: string): NavigationLinkProps[] => [
  {
    textKey: 'Home',
    linkKey: '/',
    active: path === '/'
  },
  {
    textKey: 'About',
    linkKey: '/about',
    active: path === '/about'
  },
  {
    textKey: 'Services',
    linkKey: '/services',
    active: path === '/services'
  },
  {
    textKey: 'Contact',
    linkKey: '/contact',
    active: path === '/contact'
  }
]

export { socialMedia, navigationLinks }
