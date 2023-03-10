import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

// Firebase
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection, where, orderBy, limit, query } from "firebase/firestore";

// Partials
import Header from '../Static/Partials/Header/Header';
import NewList from './Partials/NewList';
import FindFriends from './Partials/FindFriends';
import SignedOut from '../Static/Partials/SignedOut';

var pageToggle = false;

export default function Home() {
    const [user] = useAuthState(auth);
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="bg-main_bg_color text-text_white h-[100vh] flex flex-col">
                <div className="">
                    <Header />
                </div>
                <div className="w-screen h-max basis-auto grow">
                    <div className='h-full w-full flex justify-around gap-[2.5rem]'>
                        <Content />
                    </div>
                </div>
            </div>
        </>
    )
}

function Content() {
    const [user] = useAuthState(auth);
    if (user) {
        return (
            <SignedIn />
        )
    }
    else {
        return (
            <SignedOut />
        )
    }
}

function SignedIn() {
    return (
        <>
            <div className="w-[35vw] min-w-fit h-full">
                <LeftBar />
            </div>
            <div className="w-full bg-black">
                <NewList />
            </div>
        </>
    )
}

function LeftBar() {
    return (
        <div className="bg-black h-full flex flex-col">
            <div className="px-[1.5vw] py-[3vh]">
                <h3 className="text-[2.25rem] font-light">Welcome</h3>
                <h2 className="text-[2.75rem] font-semibold leading-10 pb-[2vh] whitespace-nowrap">{auth.currentUser.displayName}</h2>
                <div className="h-[1vh]"></div>
                <div className="min-h-[125px]">
                    <MyLists />
                </div>
                <div className="h-[3vh]"></div>
                <Friends />
            </div>
        </div>
    )
}

function MyLists() {
    return (
        <div>
            <h3 className="text-[2.25rem] font-semibold">Your Lists</h3>
            <div className="text-[1.5rem]">
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
            <div className="text-[1.75rem] leading-8">You have no lists</div>
        )
    }

    // map lists by last_edited_at 
    lists.sort((a, b) => {
        return b.last_edited_at - a.last_edited_at
    })

    return (
        <div className="flex flex-col text-[1.25rem]">
            {lists.map((list) => (
                <Link
                    className="text-[1.6rem] leading-8 cursor-pointer w-fit border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.25rem]"
                    to={"/MyLists/" + list.list_title_without_spaces}>
                    {list.list_title}
                </Link>
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
            <h3 className="text-[1.75rem]">Your Friends</h3>
            <div className="text-[1.5rem]">
                <YourFriends />
                <div className="h-[.75vh]"></div>
                <button
                    onClick={changeToggle}
                    className="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">
                    Find Friends
                </button>
            </div>
        </div>
    )
}

function YourFriends() {
    const [friends, setFriends] = React.useState([])
    if (friends.length === 0) {
        return (
            <div className="text-[1.75rem] leading-8">You have no friends</div>
        )
    }
    else {
        return (
            <div className="flex flex-col text-[1.25rem]">
                {friends.map((friend) => (
                    <p>Test</p>
                ))}
            </div>
        )
    }
}

// autocomplete https://www.telerik.com/blogs/quick-guide-dropdown-menus-react