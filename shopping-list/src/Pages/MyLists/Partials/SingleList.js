import React from 'react'

export default function SingleList() {
    return (
        <div className='flex justify-between p-5 border-transparent border-[3px] rounded-[4px] hover:border-white'>
            <div>
                <h2 className='text-[2.25rem]'>List Name</h2>
                <h3 className='text-[2rem]'>List Description</h3>
            </div>
            <div>
                <h3 className='text-[2rem]'>Total Cost</h3>
                <h3 className='text-[2rem]'>Number of Items</h3>
            </div>
        </div>
    )
}
