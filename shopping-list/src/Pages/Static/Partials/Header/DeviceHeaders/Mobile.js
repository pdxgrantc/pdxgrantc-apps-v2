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
    <div class="">
      <div class="grid grid-cols-3 w-full content-between">
        <div class="">test</div>
        <div class="self-center">
          <Link to="/" class="text-[2rem] font-semibold my-auto"> Ez Shop</Link>
        </div>
        <div class="self-end ">
          <UserMenu />
          {/* 
          <>
            {user ? <SignOutComponent /> : <SignInComponent />}
          </>
          */}
        </div>
      </div>
    </div>
  )
}

function SignInComponent() {
  return (
    <>
      <button onClick={signInWithGoogle} class="w-full bg-button_accent_color h-[7vh] px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Sign In</button>
    </>
  )
}

function SignOutComponent() {
  return auth.currentUser && (
    <>
      <button onClick={signOutUser} class="mx-[0px] self-end text-[1.5rem] bg-button_accent_color h-[7vh] px-[4vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Sign Out</button>
    </>
  )
}

function UserMenu() {
  const [user] = useAuthState(auth);

  const triggerButton = (props, ref) => {
    return (
      <img
        class="w-[7vh] h-[7vh]"
        {...props}
        ref={ref}
        src={PersonIcon}
        alt="Menu" />
    );
  };

  if (user) {
    return (
      <div>
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
      </div>
    )
  }
  else {
    return (
      <div>
        <Dropdown title="Dropdown" renderToggle={triggerButton}>
          <Dropdown.Item>
            <Link to='/'>Home</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <p class="cursor-pointer" onClick={signInWithGoogle}>Sign In</p>
          </Dropdown.Item>
        </Dropdown>
      </div>
    )
  }
}
