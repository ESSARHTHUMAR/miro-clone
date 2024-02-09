import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <Image src="/logo.svg"
            alt='Logo'
            height={120}
            width={120}
            className="animate-pulse duration-700"
        />
    </div>
  )
}

export default Loading