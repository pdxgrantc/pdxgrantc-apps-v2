import React, { useState } from 'react'
import Collapse from "react-collapse";

export default function Spirits() {
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
                <p>Bourbon</p>
                <p>Rye</p>
                <p>Scotch</p>
                <p>Irish</p>
                <p>Corn</p>
            </Collapse>
        </div>
    )
}

function Gin() {
   const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Gin
            </button>
            <Collapse isOpened={isOpen} className="">
                <p>London Dry</p>
                <p>Old Tom</p>
                <p>Plymouth</p>
                <p>Reserve</p>
            </Collapse>
        </div>
    )
}

function Tequila() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Tequila
            </button>
            <Collapse isOpened={isOpen} className="">
                <p>Blanco</p>
                <p>Reposado</p>
                <p>Anejo</p>
            </Collapse>
        </div>
    )
}

function Rum() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Rum
            </button>
            <Collapse isOpened={isOpen} className="">
                <p>White</p>
                <p>Gold</p>
                <p>Dark</p>
                <p>Spiced</p>
            </Collapse>
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
