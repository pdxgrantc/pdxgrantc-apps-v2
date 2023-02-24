import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// firebase
import { auth, db, signInWithGoogle } from '../../firebase'
import { doc, setDoc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

// partials
import Header from '../Static/Partials/Header/Header'


export default function UserPage() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
        <Header />
        <div class="h-[5vh]"></div>
        <div class="w-full h-[85vh] flex gap-[5vw]">
          {user ? <SignedIn /> : <SignedOut />}
        </div>
      </div>
    </>
  )
}

function SignedOut() {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div class="px-[5vw] vertical py-[12vh] w-fit mx-auto h-[90%] bg-black">
        <div>
          <h2 class="text-[3.25rem] text-center">You must be signed in</h2>
          <h2 class="text-[3.25rem] text-center">to Google to use this app</h2>
        </div>
        <div class="h-[9vh]"></div>
        <div class="m-auto w-fit">
          <button onClick={signInWithGoogle} class="m-auto cursor-pointer w-fit text-[2.75rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[2.75vw] py-[.4vh] w-fit align-middle">Sign In With Google</button>
        </div>
      </div>
    </>
  )
}

function SignedIn() {
  const location = useLocation()
  const userName = location.pathname.split('/')[1]
  const [userDescription, setUserDescription] = useState('')

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

  const [lists, setLists] = useState([])
  // get lists
  useEffect(() => {
    const getLists = async () => {
      const q = query(collection(db, "lists"), where("owner", "==", auth.currentUser.uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data())
      })
    }
    getLists()
  }, [])

  console.log(lists)

  return (
    <>
      <Helmet>
        <title>{auth.currentUser.displayName}</title>
      </Helmet>
      <div class="h-full w-full">
        <div class="h-[5vh] min-h-[25px]"></div>
        <div class="w-[88%] m-auto bg-black px-[3%] py-[5vh]">
          <div>
            <div>
              <p className="text-[1.5rem] leading-3">&nbsp;Hello</p>
              <h1 class="text-[3.5rem] font-semibold">{auth.currentUser.displayName}</h1>
            </div>
            <div>
              <h2 class="text-[2.75rem]">Lists</h2>
              <div class="grid grid-cols-3">
                {lists.map((list) => {
                  <div>
                    <h3 class="text-[2.5rem]">{list.name}</h3>
                    <p class="text-[1.5rem]">{list.description}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/*
export default function UserPage() {
  if (auth.currentUser === null) {
    return (
      <>
      </>
    )
  }
  else {
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
  }

  const [lists, setLists] = useState([])
  // get lists
  useEffect(() => {
    const getLists = async () => {
      const q = query(collection(db, "lists"), where("owner", "==", auth.currentUser.uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data())
      })
    }
    getLists()
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
    if (auth.currentUser === null) {
      return (
        <>
          <Helmet>
            <title>Loading...</title>
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
            <div class="w-[88%] m-auto bg-black px-[3%] py-[5vh]">
              <div>
                <div>
                  <p className="text-[1.5rem] leading-3">&nbsp;Hello</p>
                  <h1 class="text-[3.5rem] font-semibold">{auth.currentUser.displayName}</h1>
                </div>
                <div>
                  <h2 class="text-[2.75rem]">Lists</h2>
                  <div class="grid grid-cols-3">
                    {lists.map((list) => {
                      <div>
                        <h3 class="text-[2.5rem]">{list.name}</h3>
                        <p class="text-[1.5rem]">{list.description}</p>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}
*/
