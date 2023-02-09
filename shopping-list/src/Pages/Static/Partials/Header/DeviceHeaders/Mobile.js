import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown } from "rsuite"

// Firebase
import { auth, signInWithGoogle, signOutUser } from '../../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// static
import PersonIcon from '../../../Images/PersonIcon.svg'

export default function Mobile() {
  const [user] = useAuthState(auth);

  return (
    <div class="bg-dark_grey bg-opacity-90 py-[.3rem]">
      <div class="flex justify-between px-[7vw]">
        <div class="self-center w-fit">
          <Link to="/" class="text-[2.25rem] font-bold">Ez Shop</Link>
        </div>
        <div class="h-[5%] w-auto my-auto">
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

function UserMenu() {
  const [user] = useAuthState(auth);

  const triggerButton = (props, ref) => {
    return (
      <img
        class="w-full h-full max-h-[50px] max-w-[50px] my-auto"
        {...props}
        ref={ref}
        src={PersonIcon}
        alt="Menu" />
    );
  };

  if (user) {
    return (
      <Dropdown title="Dropdown" renderToggle={triggerButton}>
        <Dropdown.Item>
          <Link to='/'>Home</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/My-Lists">My Lists</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <p class="cursor-pointer" onClick={signOutUser}>Sign Out</p>
        </Dropdown.Item>
      </Dropdown>
    )
  }
  else {
    return (
      <Dropdown title="Dropdown" renderToggle={triggerButton}>
        <Dropdown.Item>
          <Link to='/'>Home</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <p class="cursor-pointer" onClick={signInWithGoogle}>Sign In</p>
        </Dropdown.Item>
      </Dropdown>
    )
  }
}
