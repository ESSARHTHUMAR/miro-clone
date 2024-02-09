"use client"

import { UserButton } from "@clerk/nextjs"

function Navbar() {
  return (
    <div className='bg-green-500 flex items-center gap-x-4 p-5'>
        <div className="hidden lg:flex flex-1">
            Search
        </div>
        <UserButton />
    </div>
  )
}

export default Navbar