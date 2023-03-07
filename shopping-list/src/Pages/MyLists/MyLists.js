import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection } from 'firebase/firestore'

// components
import Header from "../Static/Partials/Header/Header"

import SignedOut from "../Static/Partials/SignedOut"
import SingleList from './Partials/SingleList'
import { Link } from 'react-router-dom'

export default function MyLists() {
  const [user] = useAuthState(auth)

  return (
    <div className="m-auto bg-main_bg_color text-text_white min-h-screen">
      <Header />
      <div className="w-full h-fit">
        <div className='mx-[5vw] m-auto'>
          {user ? <SignedIn /> : <SignedOut />}
        </div>
      </div>
    </div>
  )
}

function SignedIn() {
  const header = auth.currentUser.displayName + "'s Lists";

  return (
    <>
      <Helmet>
        <title>My Lists</title>
      </Helmet>
      <div className="w-full h-fit">
        <div className='bg-black py-[5vh] px-[5vw]'>
          <h1 className='text-[3rem] font-semibold'>{header}</h1>
          <div className='h-[2vh]'></div>
          <div className='flex flex-col gap-[2vh]'>
            <ListSegment />
          </div>
        </div>
      </div>
    </>
  )
}

function ListSegment() {
  // get lists from firebase
  const [lists, setLists] = useState([])

  useEffect(() => {
    const getLists = async () => {
      const listsCol = collection(db, 'lists')
      const listSnapshot = await getDocs(listsCol)
      const listData = listSnapshot.docs.map(doc => doc.data())
      setLists(listData)
    }
    getLists()
  }, [])

  if (lists.length === 0) {
    return (
      <div className='flex gap-10'>
        <h2 className='text-[2.25rem]'>You have no lists</h2>
        <Link to='/'
          className='cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]'>
          Create One
        </Link>
      </div>
    )
  }
  else {
    return (
      <>
        {
          lists.map((list) => (
            <SingleList list={list} />
          ))
        }
      </>
    )
  }
}