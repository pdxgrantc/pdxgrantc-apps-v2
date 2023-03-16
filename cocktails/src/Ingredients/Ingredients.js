import React from 'react'
import { Helmet } from 'react-helmet'

// Partials
import Header from '../Static/Headers/Header'
import Footer from '../Static/Footers/Footer'

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
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

function Spirits() {
    return (
        <div>
            <h2 className='text-[2.5rem] font-semibold'>Base Spirits</h2>
            <div className='flex flex-col gap-5 px-[4rem] py-[3rem]'>
                <Whisky />
                <Gin />
                <Tequila />
                <Rum />
                <Vodka />
            </div>
        </div>
    )
}

function Whisky() {
    return (
        <div className='cursor-pointer rounded-[4px]'>
            <h3 className='text-[2rem] font-ssemibold'>Whisky</h3>

        </div>
    )
}

function Gin() {
    return (
        <div className='cursor-pointer rounded-[4px]'>
            <h3 className='text-[2rem] font-ssemibold'>Gin</h3>
        </div>
    )
}

function Tequila() {
    return (
        <div className='cursor-pointer rounded-[4px]'>
            <h3 className='text-[2rem] font-ssemibold'>Tequila</h3>
        </div>
    )
}

function Rum() {
    return (
        <div className='cursor-pointer rounded-[4px]'>
            <h3 className='text-[2rem] font-ssemibold'>Rum</h3>
        </div>
    )
}

function Vodka() {
    return (
        <div className='cursor-pointer rounded-[4px]'>
            <h3 className='text-[2rem] font-ssemibold'>Vodka</h3>
        </div>
    )
}
