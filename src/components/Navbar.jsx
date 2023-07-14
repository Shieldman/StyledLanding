import React from 'react'
import { UiNavbar } from '../styles/components/UiNavbar'
import { UiLogoImage } from '../styles/components/UiLogoImage'
import { UiContact } from '../styles/components/UiContact'
import { UiContactText } from '../styles/components/UiContactText'

const Navbar = () => {
  return (
    <UiNavbar>
        <UiLogoImage src="/logo.png" alt="logo" />
        <a href='https://github.com/Shieldman'>
          <UiContact src='/support.png' alt='contact'/>
          <UiContactText>Call us</UiContactText>
        </a>
    </UiNavbar>
  )
}

export default Navbar