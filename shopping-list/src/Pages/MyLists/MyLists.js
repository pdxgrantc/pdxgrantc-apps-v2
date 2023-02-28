import React from 'react'
import { Helmet } from 'react-helmet'


// firebase
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection } from 'firebase/firestore'

// components
import Header from "../Static/Partials/Header/Header"
import SignedOut from "../Static/Partials/SignedOut"
import SingleList from './Partials/SingleList'

export default function MyLists() {
  const [user] = useAuthState(auth)

  return (
    <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
      <Header />
      <div class="w-full h-fit">
        <div className='mx-[5vw] m-auto'>
          {user ? <SignedIn /> : <SignedOut />}
        </div>
      </div>
    </div>
  )
}

function SignedIn() {

  return (
    <>
      <Helmet>
        <title>My Lists</title>
      </Helmet>
      <div className="w-full h-fit">
        <div className='bg-black py-[5vh] px-[5vw]'>
          <h1 className='text-[3rem] font-semibold'>My Lists</h1>
          <div className='h-[2vh]'></div>
          <div className='flex flex-col gap-[3vh]'>
            <SingleList />
            <SingleList />
            <SingleList />
            <SingleList />
            <SingleList />
            <SingleList />
            <SingleList />
          </div>
        </div>
      </div>
    </>
  )
}

