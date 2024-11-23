import { facebookIcon, linkedinIcon } from '../lib/icons'
import { NavigationLinkProps, SocialMediaProps } from '../types/header.footer.types'

const socialMedia: SocialMediaProps[] = [
  {
    linkKey: 'https://www.facebook.com/profile.php?id=61569387957878',
    icon: facebookIcon
  },
  {
    linkKey: 'https://www.linkedin.com/company/105785189',
    icon: linkedinIcon
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
    textKey: 'QuickBooks Services',
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
