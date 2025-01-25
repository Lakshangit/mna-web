import React from 'react'

function Services() {
  return (
    <div className='md:px-14 px-4 py-14 max-w-screen-2xl mx-auto'>
        <div>
            <h2 className='text-4xl text-gray-800 font-semibold mb-2'>Our Services</h2>
            <p className='text-gray-400'>We have better service for you</p>

            {/* services */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src="/assets/images/services/images.jpeg"/>
                <img src="/assets/images/services/images.jpeg"/>
                <img src="/assets/images/services/images.jpeg"/>
                <img src="/assets/images/services/images.jpeg"/>
            </div>
        </div>
    </div>
  )
}

export default Services