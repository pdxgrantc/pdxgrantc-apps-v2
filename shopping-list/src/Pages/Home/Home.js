import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

// Firebase
import { auth, signInWithGoogle, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection, where, orderBy, limit, query } from "firebase/firestore";

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
            <div class="w-[35vw] min-w-fit h-full">
                <LeftBar />
            </div>
            <div class="w-full bg-black">
                <NewList />
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
                <h3 class="text-[2.25rem] font-light">Welcome</h3>
                <h2 class="text-[2.75rem] font-semibold leading-10 pb-[2vh] whitespace-nowrap">{auth.currentUser.displayName}</h2>
                <div class="h-[1vh]"></div>
                <div class="min-h-[125px]">
                    <MyLists />
                </div>
                <div class="h-[3vh]"></div>
                <Friends />
            </div>
        </div>
    )
}

function MyLists() {
    return (
        <div>
            <h3 class="text-[2.25rem] font-semibold">Your Lists</h3>
            <div class="text-[1.5rem]">
                <YourLists />
            </div>
        </div>
    )
}

function YourLists() {
    const [lists, setLists] = React.useState([])

    React.useEffect(() => {
        const getYourLists = async () => {
            const lists = []
            const q = query(collection(db, "lists"), where("owner", "==", auth.currentUser.uid), orderBy("last_edited_at", "desc"), limit(5))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                lists.push(doc.data())
            })
            setLists(lists)
        }
        getYourLists()
    }, [])

    if (lists.length === 0) {
        return (
            <div class="text-[1.75rem] leading-8">You have no lists</div>
        )
    }

    // map lists by last_edited_at 
    lists.sort((a, b) => {
        return b.last_edited_at - a.last_edited_at
    })

    return (
        <div class="flex flex-col text-[1.25rem]">
            {lists.map((list) => (
                <Link class="text-[1.75rem] leading-8" to={"/" + auth.currentUser.displayName + "/" + list.list_title_without_spaces}>{list.list_title}</Link>
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
    const [friends, setFriends] = React.useState([])
    if (friends.length === 0) {
        return (
            <div class="text-[1.75rem] leading-8">You have no friends</div>
        )
    }
    else {
        return (
            <div class="flex flex-col text-[1.25rem]">
                {friends.map((friend) => (
                    <p>Test</p>
                ))}
            </div>
        )
    }
}

// autocomplete https://www.telerik.com/blogs/quick-guide-dropdown-menus-react