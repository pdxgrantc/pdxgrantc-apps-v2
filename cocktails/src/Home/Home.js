import React from 'react'
import { Helmet } from 'react-helmet'

// Firebase
import { auth } from '../firebase'

// Partials
import SignedOut from '../Static/SignedOut'
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'

export default function Home() {
    const user = auth.currentUser

    if (user) {
        return (
            <>
                <Helmet>
                    <title>Cocktail Calculator</title>
                </Helmet>
                <div className="bg-main_bg_color text-text_white h-[100vh] flex flex-col">
                    <Header />
                    <div className="w-full h-max basis-auto grow">
                        <div className='m-auto rounded-[10px] bg-black min-h-full w-[90%]'>
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
}
