import React from 'react'

// Partials
import Desktop from './DeviceHeaders/Desktop'
import Mobile from './DeviceHeaders/Mobile'

export default function Header() {
  return (
    <>
            <div class="on_mobile:hidden">
                <Desktop />
            </div>
            <div class="on_desktop:hidden bg-black">
                <Mobile />
            </div>
        </>
  )
}
