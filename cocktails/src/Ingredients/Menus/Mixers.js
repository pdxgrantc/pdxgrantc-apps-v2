import React, { useState } from 'react'
import Collapse from "react-collapse";

export default function Mixers() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="">
            <button
                className='text-[2.5rem] font-semibold pb-[.25rem]'
                onClick={() => setIsOpen(!isOpen)}>
                Mixers
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='pl-5'>
                    <Vermouth />
                    <Bitters />
                    <Sodas />
                    <Juices />
                    <Other />
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </Collapse>
        </div>
    );
}

function Vermouth() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Vermouth
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'>
                    <p>Dry Vermouth</p>
                    <p>Sweet Vermouth</p>
                </div>
            </Collapse>
        </div>
    )
}

function Bitters() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Bitters
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'>
                    <p>Angostura Bitters</p>
                    <p>Peychaud's Bitters</p>
                    <p>Orange Bitters</p>
                    <p>Chocolate Bitters</p>
                    <p>Grapefruit</p>
                    <p>Chocolate</p>
                    <p>Peach</p>
                    <p>Lemon</p>
                    <p>Cherry</p>
                    <p>Plum</p>
                    <p>Mint</p>
                </div>
            </Collapse>
        </div>
    )
}

function Sodas() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Sodas
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'>
                    <p>Club Soda</p>
                    <p>Tonic Water</p>
                    <p>Ginger Beer</p>
                    <p>Ginger Ale</p>
                    <p>Lemon-Lime</p>
                    <p>Cola</p>
                </div>
            </Collapse>
        </div>
    )
}

function Juices() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Juice
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'>
                    <p>Lemon Juice</p>
                    <p>Lime Juice</p>
                    <p>Orange Juice</p>
                    <p>Cranberry Juice</p>
                    <p>Grapefruit Juice</p>
                    <p>Pineapple Juice</p>
                    <p>Tomato Juice</p>
                </div>
            </Collapse>
        </div>
    )
}

function Other() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cursor-pointer rounded-[4px]'>
            <button
                className='text-[2rem] font-ssemibold'
                onClick={() => setIsOpen(!isOpen)}>
                Other
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='grid grid-cols-2 pl-3'> 
                    <p>Simple Syrup</p>
                    <p>Agave Syrup</p>
                    <p>Demerara Syrup</p>
                    <p>Grenadine</p>
                    <p>Cream</p>
                    <p>Coffe</p>
                    <p>Tea</p>
                    <p>Tabasco Sauce</p>
                    <p>Worcestershire Sauce</p>
                </div>
            </Collapse>
        </div>
    )
}
