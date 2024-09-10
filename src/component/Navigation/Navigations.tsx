import Link from 'next/link'
import React from 'react'

const Navigations = () => {
  return (
    <div style={{
      background: "red",
      display: "flex",
      justifyContent: "space-between",
      padding: 20,

    }}>
      <img src="/Lagos-logo.png" alt="" width={50} />
      <ul style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        gap: 50,
        textDecoration: "none",
        listStyle: "none"

      }}>
        <Link href='/'> HOME</Link>
        <Link href='./about'>About</Link>
        
      
        <li>Home</li>

        <li>
          service
        </li>
        <li>Contact</li>
      </ul>

      
    </div>
  )
}

export default Navigations
