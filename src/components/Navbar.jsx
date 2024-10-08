import React from 'react'
import { IdeaIcon, Logo, OverView, TicketIcon } from '../assets/images/icons'
import { NavLink } from 'react-router-dom'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    const navList = [
        {
            id: 1, 
            icon: <OverView/>,
            title: "Overview",
            path: "/"
        },
        {
            id: 2, 
            icon: <TicketIcon/>,
            title: "Tickets",
            path: "/tickets"
        },
        {
            id: 3, 
            icon: <IdeaIcon/>,
            title: "Ideas",
            path: "/ideas"
        },
    ]

  return (
    <div className='w-[20%] h-[100em] bg-[#363740] '>
        <div className='pt-[37px] pl-[32px] pb-[39px] flex items-center space-x-[12px]'>
            <Logo/>
            <span className='text-[#A4A6B3] text-[18px] leading-[23px] font-bold'>Dashboard Kit</span>
        </div>
        <nav>
            {navList.map(item => <NavbarItem key={item.id} item={item}/>)}
        </nav>
    </div>
  )
}

export default Navbar
