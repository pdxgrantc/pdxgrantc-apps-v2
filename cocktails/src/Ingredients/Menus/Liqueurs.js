import React, { useState } from 'react'
import Collapse from "react-collapse";

export default function Liqueurs() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="">
            <button
                className='text-[2.5rem] font-semibold pb-[.25rem]'
                onClick={() => setIsOpen(!isOpen)}>
                Liqueurs
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='pl-5'>
                    <Vermouth />
                    <Other />
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
                    <p>Amaretto</p>
                    <p>Coffee Liqueur</p>
                    <p>Irish Cream</p>
                    <p>Orange Liqueur</p>
                    <p>St. Germain</p>
                    <p>Maraschino Liqueur</p>
                    <p>Galliano</p>
                    <p>Crème de Menthe</p>
                    <p>Crème de Cacao</p>
                    <p>Bénédictine D.O.M</p>
                </div>
            </Collapse>
        </div>
    )
}

