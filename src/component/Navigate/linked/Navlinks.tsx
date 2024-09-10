"use client"
import { Typography } from '@mui/material'
import Link from 'next/link'
import nav_style from "./navlink.module.css"
import { usePathname } from "next/navigation"
import React from 'react'

const Navlinks = ({item}) => {
    const pathname = usePathname()
  return (
    <div>
        <Link 
        href={item.href} className={`${nav_style.container}
         ${ pathname === item.href && nav_style.active}`}   >
        {item.title}
        </Link>
      
    </div>
  )
}

export default Navlinks
