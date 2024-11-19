import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface ContactInfoBlockProps {
  titleKey: string
  textKey: string
  icon: IconDefinition
  className?: string
  onClick?: () => void
}

interface NavLinkWithDotProps {
  link: {
    linkKey: string
    textKey: string
    active: boolean
  }
  i: number
}

export type { ContactInfoBlockProps, NavLinkWithDotProps }
