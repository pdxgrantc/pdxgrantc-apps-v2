import React from 'react'

// Partials
import Desktop from './DeviceHeaders/Desktop'
import Mobile from './DeviceHeaders/Mobile'

export default function Header() {
  return (
    <>
      <div class="on_mobile:hidden">
        <Desktop />
        <div class="h-[4vh]"></div>
      </div>
      <div class="on_desktop:hidden">
        <Mobile />
        <div class="h-[0vh]"></div>
      </div>
    </>
  )
}
