import React, { useState } from 'react'
import Collapse from "react-collapse";

export default function Mixers() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-[4rem] py-[3rem]">
            <button
                className='text-[2.5rem] font-semibold pb-[.25rem]'
                onClick={() => setIsOpen(!isOpen)}>
                Base Spirits
            </button>
            <Collapse isOpened={isOpen} className="">
                <Whisky />
                <Gin />
                <Tequila />
                <Rum />
                <Vodka />
            </Collapse>
        </div>
    );
}

function Whisky() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Whisky
            </button>
            <Collapse isOpened={isOpen} className="">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </Collapse>
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
