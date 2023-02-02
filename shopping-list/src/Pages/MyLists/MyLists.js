import React from 'react'
import { Helmet } from 'react-helmet'


// firebase
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection } from 'firebase/firestore'

// components
import Header from "../Static/Partials/Header/Header"
import SignedOut from "../Static/Partials/SignedOut"

export default function MyLists() {
  const [user] = useAuthState(auth)

  return (
    <>
      <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
        <Header />
        <div class="h-[5vh]"></div>
        <div class="w-full h-fit bg-black py-[3vh] px-[5vw]">
          {user ? <SignedIn /> : <SignedOut />}
        </div>
      </div>
    </>
  )
}

function SignedIn() {

  return (
    <>
      <Helmet>
        <title>My Lists</title>
      </Helmet>

      <h1>My Lists</h1>
    </>
  )
}

