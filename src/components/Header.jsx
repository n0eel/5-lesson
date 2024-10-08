import React, { useEffect, useState } from 'react'
import { NotificationIcon, SearchIcon } from '../assets/images/icons'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const [pathTitle, setPathTitle] = useState("Overview")
    const path = useLocation()

    function renderTitle(value) {
        switch(value){
            case "/":
            setPathTitle("Overview")
            break;
            case "/tickets":
            setPathTitle("Tickets")
            break;
            case "/ideas":
            setPathTitle("Ideas")
            break;
        }
    }
    useEffect(() => {
        renderTitle(path.pathname)
    }, [path])

  return (
    <div className='flex items-center justify-between mb-[54px]'>
        <h2 className='font-bold text-[24px] leading-[30px]'>{pathTitle}</h2>
        <div className='flex'>
            <SearchIcon/>
            <NotificationIcon/>
            <p className='text-[14px] leading-[20px] text-[#252733] font-semibold'>Jones Ferdinand</p>

        </div>
    </div>
  )
}

export default Header
