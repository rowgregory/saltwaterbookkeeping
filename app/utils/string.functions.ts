export const shouldExcludePath = (pathname: string) => {
  const validPaths = ['/', '/about', '/services', '/testimonials', '/contact']

  const isValidPath = validPaths.some((path) => pathname === path)

  return isValidPath
}

export function truncateString(str: string, slice: number) {
  if (str.length > slice) {
    return str.slice(0, slice) + '...'
  }
  return str
}
