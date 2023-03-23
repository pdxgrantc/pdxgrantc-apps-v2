import React, { useState } from 'react'
import Collapse from "react-collapse";

export default function Spirits() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="">
            <button
                className='text-[2.5rem] font-semibold pb-[.25rem]'
                onClick={() => setIsOpen(!isOpen)}>
                Base Spirits
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='pl-5'>
                    <Whisky />
                    <Gin />
                    <Tequila />
                    <Rum />
                    <Vodka />
                </div>
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
                <div className='grid grid-cols-2 pl-3'>
                    <p>Bourbon</p>
                    <p>Rye</p>
                    <p>Scotch</p>
                    <p>Irish</p>
                    <p>Corn</p>
                </div>
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
                <div className='grid grid-cols-2 pl-3'>
                    <p>London Dry</p>
                    <p>Old Tom</p>
                    <p>Plymouth</p>
                    <p>Reserve</p>
                </div>
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
                <div className='grid grid-cols-2 pl-3'>
                    <p>Blanco</p>
                    <p>Reposado</p>
                    <p>Anejo</p>
                </div>
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
                <div className='grid grid-cols-2 pl-3'>
                    <p>White</p>
                    <p>Gold</p>
                    <p>Dark</p>
                    <p>Spiced</p>
                </div>
            </Collapse>
        </div>
    )
}

function Vodka() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Vodka
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'>
                    <p>Plain</p>
                    <p>Rye</p>
                    <p>Potato</p>
                </div>
            </Collapse>
        </div>
    )
}
