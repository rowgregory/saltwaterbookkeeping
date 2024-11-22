import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderLower from './HeaderLower'
import HeaderFixed from './HeaderFixed'

const Header = () => {
  return (
    <header className="lg:-mb-12">
      <HeaderTop />
      <HeaderLower />
      <HeaderFixed />
    </header>
  )
}

export default Header
