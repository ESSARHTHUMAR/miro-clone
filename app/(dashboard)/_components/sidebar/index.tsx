import React from 'react'
import List from './List'
import NewButton from './NewButton'

function Sidebar() {
  return (
    <aside className='fixed z-[1] left-0 bg-blue-500 h-full w-[60px] flex p-3 flex-col gap-y-4'>
      <List />
      <NewButton />
    </aside>
  )
}

export default Sidebar