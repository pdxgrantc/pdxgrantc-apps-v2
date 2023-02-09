import React from 'react'

// Partials
import Desktop from './DeviceHeaders/Desktop'
import Mobile from './DeviceHeaders/Mobile'

export default function Header() {
  return (
    <>
      <div class="w-full on_mobile:hidden">
        <Desktop />
      </div>
      <div class="w-full fixed on_desktop:hidden">
        <Mobile />
      </div>
    </>
  )
}
