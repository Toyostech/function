"use client"
import Link from 'next/link'

import { title } from 'process'
import React from 'react'
import Navlinks from './Navlinks'

interface linksDated{
    href: string
    title: string


}

const linksDate= [
    {
        href: "/abouts",
        title: "About"
    },
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/services",
        title: "Service"
    }
    
    
]

const Linkeds = ({href, title}: linksDated) => {


  return (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        padding: 15,
        gap: 50,
        fontWeight: 500


        
    }}>
        {linksDate.map((cur=>(
            <div>
                <Navlinks item={cur} key={cur.title}/>

            

            </div>

        )))}
      
    </div>
  )
}

export default Linkeds
