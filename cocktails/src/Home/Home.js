import React from 'react'
import { Helmet } from 'react-helmet'

// Partials
import Header from '../Static/Headers/Header'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Cocktail Calculator</title>
            </Helmet>
            <div className="bg-main_bg_color text-text_white h-[100vh] flex flex-col">
                <div className="">
                    <Header />
                </div>
                <div className="w-screen h-max basis-auto grow">
                </div>
            </div>
        </>
    )
}
