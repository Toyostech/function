'use client'
import React, { useState } from 'react'
// import Datass from "@/component/project1/utility/datas"
import { Typography } from '@mui/material'

const ArrayAdd = () => {
 const[subadd, setsubadd] = useState(["thing1", "thing2"])

  function addArray (){
    setsubadd(prevState => {
      return [...prevState, `thing ${prevState.length + 1}`]
    
    })

  }

  const elementadd = subadd.map( thing => <p key={thing}>{thing}</p>)


  
  // console.log(Datass)
  return (
    <div>
      <button onClick={addArray} style={{
        padding: 20,
        borderRadius: 20,
        background: "blue",
        color: "red",
        fontWeight: 500

      }}>Add Items</button>
      <Typography color={'blue'}>{elementadd}</Typography>
    </div>
  )
}

export default ArrayAdd
