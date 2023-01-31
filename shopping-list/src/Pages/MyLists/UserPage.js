import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// firebase
import { auth, db } from '../../firebase'
import { doc, setDoc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'

// partials
import Header from '../Static/Partials/Header/Header'

export default function UserPage() {
  const location = useLocation()
  const userName = location.pathname.split('/')[1]
  const [userDescription, setUserDescription] = useState('')

  // check if user exists
  useEffect(() => {
    const getUserDescription = async () => {
      const docRef = doc(db, "users", + auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setUserDescription(docSnap.data().description)
      }
      else {
        setUserDescription('User does not exist')
      }
    }
    getUserDescription()
  }, [])

  if (userDescription === 'User does not exist') {
    return (
      <>
        <Helmet>
          <title>User Does Not Exist</title>
        </Helmet>
      </>
    )
  }
  else {
    return (
      <>
        <Helmet>
          <title>{auth.currentUser.displayName}</title>
        </Helmet>
        <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
          <Header />
          <div class="h-[5vh] min-h-[25px]"></div>
          <div class="w-[88%] m-auto bg-black px-[3%] py-[3vh]">
            <div>
              <h1 class="text-[3.5rem] font-semibold">{userName}</h1>
              <h2 class="text-[2.25rem]">{userDescription}</h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}
