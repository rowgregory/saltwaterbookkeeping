import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface NavigationLinkProps {
  textKey: string
  linkKey: string
  active: boolean
}

interface SocialMediaProps {
  linkKey: string
  icon: IconDefinition
}

export type { NavigationLinkProps, SocialMediaProps }
