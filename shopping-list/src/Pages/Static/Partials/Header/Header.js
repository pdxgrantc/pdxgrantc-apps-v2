import React from 'react'

// Partials
import Desktop from './DeviceHeaders/Desktop'
import Mobile from './DeviceHeaders/Mobile'

export default function Header() {
  return (
    <>
      <div className='mb-[2.5rem]'>
        <div className="w-full on_mobile:hidden">
          <Desktop />
        </div>
        <div className="w-full fixed on_desktop:hidden">
          <Mobile />
        </div>
      </div>
    </>
  )
}
