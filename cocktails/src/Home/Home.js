import React from 'react'
import { Helmet } from 'react-helmet'

// Partials
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'

export default function Home() {
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
