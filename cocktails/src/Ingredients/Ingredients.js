import React from 'react'
import { Helmet } from 'react-helmet'

// Partials
import Spirits from './Menus/Spirits'
import Mixers from './Menus/Mixers'
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'

// Styles
import "./collapse.css"

export default function Ingredients() {
    return (
        <>
            <Helmet>
                <title>My Ingredients</title>
            </Helmet>
            <div className="bg-main_bg_color text-text_white h-[100vh] flex flex-col">
                <Header />
                <div className="w-full h-max basis-auto grow">
                    <div className='m-auto bg-black rounded-[10px] min-h-full w-[90%] '>
                        <Spirits />
                        <Mixers />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}