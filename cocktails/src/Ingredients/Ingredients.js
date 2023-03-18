import React from 'react'
import { Helmet } from 'react-helmet'

// Firebase
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// Partials
import SignedOut from '../Static/SignedOut'
import MyItems from './MyItems'
import Spirits from './Menus/Spirits'
import Liqueurs from './Menus/Liqueurs'
import Mixers from './Menus/Mixers'
import Garnish from './Menus/Garnish'
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'


export default function Ingredients() {
    const [user] = useAuthState(auth);

    if (!user) {
        return (
            <>
                <div className="mx-auto bg-main_bg_color text-text_white min-h-[100vh] flex flex-col">
                    <Header />
                    <div className="w-full basis-auto grow">
                        <div className='mx-auto w-fit'>
                            <SignedOut />
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Helmet>
                    <title>My Ingredients</title>
                </Helmet>
                <div className="bg-main_bg_color text-text_white min-h-[100vh] flex flex-col">
                    <Header />
                    <div className="w-full basis-auto grow">
                        <div className='m-auto bg-black rounded-[10px] h-auto w-[90%] '>
                            <div className='w-[90%] m-auto py-[2rem]'>
                                <h1 className='text-[3.25rem] font-semibold pb-[1rem] m-auto'>My Ingredients</h1>
                                <div className='on_desktop:grid on_desktop:grid-cols-2'>
                                    <MyItems />
                                    <Spirits />
                                    <Liqueurs />
                                    <Mixers />
                                    <Garnish />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}