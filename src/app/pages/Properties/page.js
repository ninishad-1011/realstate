import React from 'react'
import Card from '../../card'

function page() {
  return (
    <div className='bg-white'>
    <div className="container mx-auto  mt-10 mb-10">
        <div className='border-l-5 border-green-500 text-black mb-20'>
            <h1 className='text-black text-6xl font-bold px-6 py-3'>Our Amazing Properties</h1>
            <p className='text-gray-500 px-7 py-2'>Properties List</p>
            </div>

     <div>
         <Card limit={6} pagination={true} />  
     </div>
    </div>
    </div>
  )
}

export default page
