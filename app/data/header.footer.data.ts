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

const navigationLinks = (
  path: string,
  isAuthenticated: boolean,
  isVisible: boolean
): NavigationLinkProps[] => {
  const links = [
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
      textKey: 'Testimonials',
      linkKey: '/testimonials',
      active: path === '/testimonials'
    },
    {
      textKey: 'Contact',
      linkKey: '/contact',
      active: path === '/contact'
    }
  ]

  if (isVisible) {
    if (isAuthenticated) {
      links.push({
        textKey: 'Dashboard',
        linkKey: '/admin/dashboard',
        active: path === '/admin/dashboard'
      })
    } else {
      links.push({
        textKey: 'Login',
        linkKey: '/auth/login',
        active: path === '/auth/login'
      })
    }
  }

  return links
}

export { socialMedia, navigationLinks }
