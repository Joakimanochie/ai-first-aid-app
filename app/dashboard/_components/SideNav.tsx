'use client'
import { Ambulance, History, Home, Settings } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

    const Meunlist =[
        {
            name: 'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name: 'History',
            icon:History,
            path:'/dashboard/history'
        },
        {
            name: 'Ambulance',
            icon:Ambulance,
            path:'/dashboard/ambulance'
        },
        {
            name: 'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center border-b'>
        <Image src={'/Red Circle Health Logo (1).svg'} alt='logo' width={120} height={100}/>
        </div>

        <div className='mt-3'>
            {Meunlist.map((meun,index)=>(
                <div className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg cursor-pointer
                items-center
                ${path==meun.path&&'bg-primary text-white'}`}>
                    <meun.icon className='h-7 w-7'/>
                    <h2>{meun.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav