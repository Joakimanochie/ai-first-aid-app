import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex gap-2 items-center
        p-2 border rounded-md max-w-l'>
            <Search/>
            <input type="text" placeholder='Search....'
            className='outline-none'
            />
        </div>
    </div>
  )
}

export default Header