import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleList({list}) {
    return (
        <Link to='/MyLists'>
        <div className='flex justify-between p-5 border-white border-opacity-25 border-[3px] hover:border-opacity-100 rounded-[4px] transition-all duration-[200ms]'>
            <div>
                <h2 className='text-[2.25rem]'>{list.list_title}</h2>
                <h3 className='text-[2rem]'>List Description</h3>
            </div>
            <div>
                <h3 className='text-[2rem]'>Total Cost</h3>
                <h3 className='text-[2rem]'>Number of Items</h3>
            </div>
        </div>
        </Link>
    )
}
