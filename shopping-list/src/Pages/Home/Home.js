import React from 'react'
import { Helmet } from 'react-helmet'

// Firebase
import { auth, signInWithGoogle, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection } from "firebase/firestore";

// Partials
import Header from '../Static/Partials/Header/Header';
import NewList from './Partials/NewList';
import FindFriends from './Partials/FindFriends';

var pageToggle = false;

export default function Home() {
    const [user] = useAuthState(auth);
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
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

function SignedIn() {
    return (
        <>
            <div class="w-[26vw] h-full">
                <LeftBar />
            </div>
            <div class="w-full bg-black">
                {pageToggle ? <FindFriends /> : <NewList />}
            </div>
        </>
    )
}

function SignedOut() {
    return (
        <>
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

function LeftBar() {
    return (
        <div class="bg-black h-full flex flex-col">
            <div class="px-[1.5vw] py-[3vh]">
                <h2 class="text-[2.75rem]">Your Stuff</h2>
                <div class="h-[1vh]"></div>
                <Lists />
                <div class="h-[3vh]"></div>
                <Friends />
            </div>
        </div>
    )
}

function Lists() {
    if (window.location.pathname === "/") {
        return (
            <div>
                <h3 class="text-[1.75rem] font-semibold">Your Lists</h3>
                <div class="text-[1.5rem]">
                    <YourLists />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3 class="text-[1.75rem] font-semibold">Your Lists</h3>
                <div class="text-[1.5rem]">
                    <YourLists />
                    <div class="h-[.75vh]"></div>
                    <h4 class="w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Create New List</h4>
                </div>
            </div>
        )
    }
}

function YourLists() {
    const [lists, setLists] = React.useState([])

    React.useEffect(() => {
        const getYourLists = async () => {
            const lists = []
            const querySnapshot = await getDocs(collection(db, "users", auth.currentUser.uid, "lists"))
            querySnapshot.forEach((doc) => {
                lists.push(doc.data())
                console.log(doc.data())
            })
            setLists(lists)
        }
        getYourLists()
    }, [])

    // map lists by last_edited_at 
    lists.sort((a, b) => {
        return b.last_edited_at - a.last_edited_at
    })

    return (
        <div class="flex flex-col text-[1.25rem]">

            {lists.map((list) => (
                <p>{list.list_title}</p>
            ))}
        </div>
    )
}

function changeToggle() {
    if (pageToggle) {
        pageToggle = false
    }
    else {
        pageToggle = true;
    }
}

function Friends() {
    return (
        <div>
            <h3 class="text-[1.75rem]">Your Friends</h3>
            <div class="text-[1.5rem]">
                <YourFriends />
                <div class="h-[.75vh]"></div>
                <button onclick={changeToggle} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Find Friends</button>
            </div>
        </div>
    )
}

function YourFriends() {
    return (
        <div class="flex flex-col text-[1.25rem]">
            <p>Friend Item</p>
            <p>Friend Item</p>
            <p>Friend Item</p>
            <p>Friend Item</p>
            <p>Friend Item</p>
        </div>
    )
}

// autocomplete https://www.telerik.com/blogs/quick-guide-dropdown-menus-react