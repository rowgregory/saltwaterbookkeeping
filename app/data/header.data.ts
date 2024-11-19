import { phoneIcon, emailIcon, accessTimeIcon } from '../lib/icons'

const contactInfoBlockData = [
  {
    icon: phoneIcon,
    titleKey: 'Helpline and support',
    textKey: '+1 978 6602794',
    onClick: () => (window.location.href = 'tel:+19786602794'),
    className: 'cursor-pointer'
  },
  {
    icon: emailIcon,
    titleKey: 'Send Us Mail',
    textKey: 'pam@saltwaterbookkeeping.com',
    onClick: () => (window.location.href = 'mailto:pam@saltwaterbookkeeping.com'),
    className: 'cursor-pointer'
  },
  {
    icon: accessTimeIcon,
    titleKey: 'Our Office Time',
    textKey: '9:00AM - 5:00PM'
  }
]

export { contactInfoBlockData }
