import Link from 'next/link'
import React from 'react'

const Header = () => {
    const hearItems = [
        {
            title:"Home",
            url:'/'
        },
        {
            title:"Fetch Data",
            url:'/fetch'
        },
        {
            title:"Auth",
            url:'/auth'
        },
    ]
  return (
    <div className=' sticky top-0 w-full flex justify-center z-10'>
        {
            hearItems.map((item,idx) => <Link href={item.url} key={idx} className='p-3'>
                {item.title}
            </Link>)
        }
    </div>
  )
}

export default Header