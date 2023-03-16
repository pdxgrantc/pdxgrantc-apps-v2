import React, { useState } from 'react'
import Collapse from "react-collapse";

export default function Garnish() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="">
            <button
                className='text-[2.5rem] font-semibold pb-[.25rem]'
                onClick={() => setIsOpen(!isOpen)}>
                Garnish
            </button>
            <Collapse isOpened={isOpen} className="">
                <div className='pl-5'>
                    <Fruit />
                    <Other />
                </div>
            </Collapse>
        </div>
    );
}


function Fruit() {
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
                    <p>Oranges</p>
                    <p>Lemons</p>
                    <p>Limes</p>
                    <p>Cherries</p>
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
                    <p>Salt</p>
                    <p>Olives</p>
                    <p>Mint</p>
                    <p>Celery</p>
                    <p>Pickles</p>
                    <p>Whipped Cream</p>
                </div>
            </Collapse>
        </div>
    )
}
