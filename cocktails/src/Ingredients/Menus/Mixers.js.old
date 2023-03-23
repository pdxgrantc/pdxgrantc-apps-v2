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
                    <Bitters />
                    <Sodas />
                    <Juices />
                    <Other />
                </div>
            </Collapse>
        </div>
    );
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
                    <p>Grapefruit Bitters</p>
                    <p>Peach Bitters</p>
                    <p>Lemon Bitters</p>
                    <p>Cherry Bitters</p>
                    <p>Plum Bitters</p>
                    <p>Mint Bitters</p>
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
                    <p>Coffee</p>
                    <p>Tea</p>
                    <p>Tabasco Sauce</p>
                    <p>Worcestershire Sauce</p>
                </div>
            </Collapse>
        </div>
    )
}
