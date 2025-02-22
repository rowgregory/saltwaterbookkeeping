import ClockSVG from '../components/svg/ClockSVG'
import EnvelopeSVG from '../components/svg/EnvelopeSVG'
import PhoneSVG from '../components/svg/PhoneSVG'
import { dashboardIcon, gearIcon, robotIcon, usesrsIcon } from '../lib/icons'

export const contactInfoBlockData = [
  {
    icon: <PhoneSVG />,
    titleKey: 'Helpline and support',
    textKey: '(978) 219-4339',
    onClick: () => (window.location.href = 'tel:+19782194339'),
    className: 'cursor-pointer'
  },
  {
    icon: <EnvelopeSVG />,
    titleKey: 'Send Us Mail',
    textKey: 'pam@saltwaterbookkeeping.com',
    onClick: () => (window.location.href = 'mailto:pam@saltwaterbookkeeping.com'),
    className: 'cursor-pointer'
  },
  {
    icon: <ClockSVG />,
    titleKey: 'Our Office Time',
    textKey: '9:00AM - 5:00PM'
  }
]

export const adminLinkData = (path: string) => [
  {
    icon: dashboardIcon,
    textKey: 'Dashboard',
    linkKey: '/admin/dashboard',
    active: path === '/admin/dashboard'
  },
  {
    icon: usesrsIcon,
    textKey: 'Testimonials',
    linkKey: '/admin/testimonials',
    active: path === '/admin/testimonials'
  },
  {
    icon: gearIcon,
    textKey: 'Settings',
    linkKey: '/admin/settings',
    active: path === '/admin/settings'
  },
  {
    icon: robotIcon,
    textKey: 'Ai',
    linkKey: '/admin/ai',
    active: path === '/admin/ai'
  }
]
